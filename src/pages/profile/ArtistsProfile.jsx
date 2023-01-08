import {Button, Skeleton} from '@mui/material'
import React from 'react'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import BackgroundBlurSVG from '../../components/common/assets/BackgroundBlurSVG'
import FavoriteVideoBlueHeartSVG from '../../components/profile/assets/FavoriteVideoBlueHeartSVG'
import FavoriteVideoPlaceHolderSVG from '../../components/profile/assets/FavoriteVideoPlaceHolderSVG'
import FavoriteVideoPlayButtonSVG from '../../components/profile/assets/FavoriteVideoPlayButtonSVG'
import ProfileCurvedLineSVG from '../../components/profile/assets/ProfileCurvedLineSVG'
import ProfileRightCurvedLine from '../../components/profile/assets/ProfileRightCurvedLine'
import cartImage from "../../assets/images/home-item.png"
import ArtistProfileSortIConSVG from '../../components/profile/assets/ArtistProfileSortIConSVG'
import ArtistProfilePlaceHolderSVG from '../../components/profile/assets/ArtistProfilePlaceHolderSVG'
import SwipeBottomSheet from '../../components/bottomSheet/SwipeBottomSheet'
import BottomSheetHeader from '../../components/bottomSheet/BottomSheetHeader'
import ArtistGreenThickSVG from '../../components/profile/assets/ArtistGreenThickSVG'
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import {useState} from 'react'
import {getArtist, getArtistVideos, postLike, deleteLike, postFollow, deleteFollow} from '../../service/ApiClient'
import {useEffect} from 'react'
import FavoriteVideoEmptyBlueHeartSVG from '../../components/profile/assets/FavoriteVideoEmptyBlueHeartSVG'
import VideoCard from './VideoCard'
import {useDispatch, useSelector} from 'react-redux'
import {selectInitialData} from '../../redux/initialize/InitializeSlice'
import {selectSort, selectVideos, setSortBase, VideosData} from '../../redux/profile/SelectedSort'
import ProfileSkeleton from '../../components/profile/ProfileSkeleton'
import VideoCardSkeleton from '../../components/profile/VideoCardSkeleton'

function ArtistsProfile() {
    const [openSorting, setOpenSorting] = React.useState(false);
    const initialData = useSelector(selectInitialData)

    const defaultedSort = initialData?.video_sorts?.filter((item) => item?.is_default === true)[0]
    const [sort, setSort] = useState(defaultedSort)
    const sortingBase = useSelector(selectSort)
    console.log(sortingBase)
    const [isFollowed, setIsFollowed] = useState(false)
    const [videos, setVideos] = useState([])
    const [id, setId] = useState(1)
    const [artist, setArtist] = useState({})
    const [followrsCount, setFollowersCount] = useState()
    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const videoDatas = useSelector(selectVideos)
    const videoData = {
        sort_type: sortingBase ? sortingBase?.title_en : defaultedSort?.title_en,
        artist_id: id,
    }
    // first request when page is loaded for first time
    const getArtistQuery = useQuery(["getArtistQuery"], () => getArtist(id), {
        onSuccess: (res) => {
            setArtist(res?.data?.result?.artist)
        },
        refetchOnWindowFocus: false
    })
    //handle sorting request
    const sortingMutation = useMutation((videoData) => getArtistVideos(videoData), {
        onSuccess: (res) => {
            setVideos(res?.data?.result?.videos)
            dispatch(VideosData({video: res?.data?.result?.videos}))
        }
    })
    // useEffect(() => {
    //     sortingMutation.mutate(videoData)
    // }, [])

    const getVideosQuery = useQuery(["getVideosQuery"], () => getArtistVideos(videoData), {
        onSuccess: (res) => {
            setVideos(res?.data?.result?.videos)
            dispatch(VideosData({video: res?.data?.result?.videos}))
        },
        refetchOnWindowFocus: false,
    })

    // caching data
    useEffect(() => {
        setVideos(videoDatas)
        setArtist(getArtistQuery.data?.data?.result?.artist)
    }, [])

    const toggleSortingDrawer = (newOpen) => () => {
        setOpenSorting(newOpen);
    };
    const handleOpenSorting = () => {
        setOpenSorting(!openSorting);
    };
    const handleClickSorting = (type) => {
        dispatch(setSortBase({sort: type}))
        sortingMutation.mutate({
            sort_type: type?.title_en,
            artist_id: id,
        })
        setOpenSorting(false)
    }
    //handling follow request
    const followMutation = useMutation((followData) => postFollow(followData), {
        onSuccess: () => {
            queryClient.invalidateQueries(["getArtistQuery"])
        }
    })
    //handling unfollow request
    const unFollowMutation = useMutation((unfollowData) => deleteFollow(unfollowData), {
        onSuccess: () => {
            queryClient.invalidateQueries(["getArtistQuery"])
        }
    })
    //click handler for follow button
    const handleFollow = (artistId, isFollowed) => {
        if (!!isFollowed) {
            unFollowMutation.mutate({model_id: artistId, model_type: "artist"})
            setIsFollowed((prev) => !prev)
            setFollowersCount((prev) => (prev - 1))

        } else {
            followMutation.mutate({model_id: artistId, model_type: "artist"})
            setIsFollowed((prev) => !prev)
            setFollowersCount((prev) => (prev + 1))
        }
    }
    useEffect(() => {
        setFollowersCount(artist?.followers_count)
        setIsFollowed(!!artist?.is_followed)
    }, [artist])
    return (
        <div dir='rtl' className='w-full h-full overflow-y-scroll overflow-x-hidden'>
            <div className='w-full h-full relative max-w-[480px] mx-auto '>
                <div className="absolute top-[-44%] left-[48%] translate-x-[-57%] z-10 ">
                    <BackgroundBlurSVG/>
                </div>
                <div className="absolute -top-56 left-[50%] translate-x-[-170%] z-20 ">
                    <ProfileCurvedLineSVG/>
                </div>
                <div className="absolute -top-[8rem] right-[-9%]  z-20 ">
                    <ProfileRightCurvedLine/>
                </div>
                <div
                    className='bg-black-box mt-24 z-30 flex flex-col  relative overflow-visible rounded-[30px] pb-[25px] px-10 mx-[22px]'
                >
                    <div className='w-full flex items-center justify-center -mt-16'>
                        <div
                            className="bg-gradient-to-r from-[#5E46F8] to-[#C03EFE] w-[104px] h-[104px] flex items-center justify-center rounded-[30px] relative "
                        >
                            <img
                                src={artist?.cover?.optimized}
                                className="w-[100px] h-[100px] object-cover rounded-[29px] z-30 absolute top-[2px] left-[2px]"
                                alt=""
                            />
                            <ArtistProfilePlaceHolderSVG className="abolute top-0 left-0"/>
                        </div>
                    </div>
                    {getArtistQuery.isLoading ?
                        <Skeleton
                            className="!mt-[12px] !mb-[6px] after:!animate-spin-slow mx-auto after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none  "
                            animation="wave"
                            sx={{bgcolor: "rgb(110 107 161 / 11%)", animationDuration: "0.8s !important"}}
                            variant="rounded" width={80} height={25}/> :
                        <p
                            className='text-white text-[1.8rem] fa-format-600 w-full flex items-center justify-center mt-[12px]'
                        >
                            {artist?.name}
                        </p>}
                    <div className='flex items-center justify-between mt-[13px]'>
                        <div className='flex flex-col items-center'>
                            {getArtistQuery.isLoading ?
                                <Skeleton
                                    className=" after:!animate-spin-slow mx-auto after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none  "
                                    animation="wave"
                                    sx={{bgcolor: "rgb(110 107 161 / 11%)", animationDuration: "0.8s !important"}}
                                    variant="rounded" width={20} height={20}
                                />
                                : <p className='text-[1.6rem] fa-format-300 text-white fa-num'>{artist?.view_count} </p>
                            }
                            <p className='text-[1rem] text-gray-A fa-format-300'>تعداد پخش</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            {getArtistQuery.isLoading ?
                                <Skeleton
                                    className=" after:!animate-spin-slow mx-auto after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none  "
                                    animation="wave"
                                    sx={{bgcolor: "rgb(110 107 161 / 11%)", animationDuration: "0.8s !important"}}
                                    variant="rounded" width={20} height={20}
                                />
                                :
                                <p className='text-[1.6rem] fa-format-300 text-white fa-num'>{artist?.followers_count} </p>
                            }
                            <p className='text-[1rem] text-gray-A fa-format-300'>دنبال کننده</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            {getArtistQuery.isLoading ?
                                <Skeleton
                                    className="after:!animate-spin-slow mx-auto after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none  "
                                    animation="wave"
                                    sx={{bgcolor: "rgb(110 107 161 / 11%)", animationDuration: "0.8s !important"}}
                                    variant="rounded" width={20} height={20}
                                />
                                :
                                <p className='text-[1.6rem] fa-format-300 text-white fa-num'>{artist?.video_count}</p>}
                            <p className='text-[1rem] text-gray-A fa-format-300'>تعداد ویدیو </p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-[19px]'>
                        {
                            getVideosQuery.isLoading ?
                                <Skeleton
                                    className=" after:!animate-spin-slow mx-auto after:!bg-shimmer-gradient !bg-shimmer-bg !rounded-[30px] shadow-none  "
                                    animation="wave"
                                    sx={{bgcolor: "rgb(110 107 161 / 11%)", animationDuration: "0.8s !important"}}
                                    variant="rounded" width="70%" height={48}
                                />
                                :
                                <>
                                    {!isFollowed ?
                                        <Button
                                            onClick={() => handleFollow(artist?.id, artist?.is_followed)}
                                            className='!bg-blue !fa-format-400 !text-[1.6rem] !flex !items-center !justify-center !w-[298px] !h-[48px] !rounded-[30px]'
                                        >
                                            <p className='text-white'>دنبال کنید</p>
                                        </Button>
                                        :
                                        <Button
                                            onClick={() => handleFollow(artist?.id, artist?.is_followed)}
                                            variant='outlined'
                                            className='!text-white !bg-[rgba(94,70,248,0.2)] !w-[298px] !h-[48px] !flex !items-center !justify-center !text-[1.6rem] !fa-format-400 !rounded-[30px] !border-[1px] !border-[#5E46F8]'
                                        >
                                            <p className='text-white'> دنبال میکنید</p>
                                        </Button>
                                    }
                                </>
                        }
                    </div>
                </div>
                <div className='relative z-30 px-[22px] pb-[70px]'>
                    <div className='flex justify-between items-center mt-[23px] mb-[14px] px-3'>
                        <div
                            onClick={handleOpenSorting}
                            className='flex items-center gap-4'
                        >
                            <ArtistProfileSortIConSVG/>
                            <p className='text-[1.4rem] text-white fa-format-200 '> {sortingBase?.title_fa ? sortingBase?.title_fa : defaultedSort?.title_fa} </p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <FavoriteVideoPlayButtonSVG/>
                            <p className='text-[1.4rem] text-white fa-format-200'>پخش همه</p>
                        </div>
                    </div>
                    {getVideosQuery.isLoading || sortingMutation.isLoading ?
                        <div className='mt-[-2px]'>
                            {
                                Array.from([1, 2, 3, 4, 5, 6, 7]).map((item, index) => (
                                    <VideoCardSkeleton/>
                                ))
                            }
                        </div>
                        :
                        <>
                            {
                                videos?.map((item, index) => (
                                    <VideoCard item={item} index={index}/>
                                ))
                            }
                        </>
                    }
                </div>
            </div>
            <SwipeBottomSheet
                Header={<BottomSheetHeader title=" مرتب سازی"/>}
                Content={
                    <div
                        dir="rtl"
                        className="flex flex-col items-start w-full justify-start"
                    >
                        {
                            initialData?.video_sorts?.map((item, index) => (
                                <Button
                                    key={index}
                                    onClick={() => handleClickSorting(item)}
                                    sx={{"&:hover": {backgroundColor: "#201d24"}}}
                                    className="!flex !gap-4 !items-center !w-full !p-0 !justify-start !mb-4"
                                >
                                    <p className='!text-[1.4rem] !fa-format-400 text-white'>
                                        {item?.title_fa}
                                    </p>
                                    {(sortingBase?.title_en || sortingBase?.title_en) === item?.title_en &&
                                        <ArtistGreenThickSVG/>}
                                </Button>))
                        }
                    </div>
                }
                open={openSorting}
                toggleDrawer={toggleSortingDrawer}
            />
        </div>
    )
}

export default ArtistsProfile