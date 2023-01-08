import React, {useEffect} from 'react'
import BackgroundBlurSVG from '../../components/common/assets/BackgroundBlurSVG'
import cartImage from "../../assets/images/Rectangle 1006.png";
import ProfileCrownSVG from '../../components/profile/assets/ProfileCrownSVG';
import ProfileWhiteHeartSVG from '../../components/profile/assets/ProfileWhiteHeartSVG';
import ChevronLeftSVG from '../../components/common/assets/ChevronLeftSVG';
import {Button, Skeleton} from '@mui/material';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import ProfileSkeleton from '../../components/profile/ProfileSkeleton';
import ProfileDefaultPicSVG from '../../components/profile/assets/ProfileDefaultPicSVG';
import ProfileMicrophoneSVG from '../../components/profile/assets/ProfileMicrophoneSVG';
import ProfileVideoPlaceholderSVG from '../../components/profile/assets/ProfileVideoPlaceholderSVG';
import ProfileGearwheelSVG from '../../components/profile/assets/ProfileGearwheelSVG';
import ProfileCurvedLineSVG from '../../components/profile/assets/ProfileCurvedLineSVG';
import ProfileRightCurvedLine from '../../components/profile/assets/ProfileRightCurvedLine';
import ProfileSpecialAccountSVG from '../../components/profile/assets/ProfileSpecialAccountSVG';
import {useState} from 'react';
import {getProfile} from '../../service/ApiClient';
import {useQuery} from "@tanstack/react-query";
import {useNavigate} from 'react-router-dom';

function Profile() {
    const [profile, setProfile] = useState([])
    const navigate = useNavigate();
    const getProfileQuery = useQuery(["getProfileQuery"], () => getProfile(), {
        onSuccess: (res) => {
            setProfile(res.data.result)
        },
        refetchOnWindowFocus: false,
    })
    useEffect(() => {
        setProfile(getProfileQuery?.data?.data?.result)
    }, [])
    const navigateSetting = () => {
        navigate('/setting')
    }
    const navigatePlans = () => {
        navigate('/plans')
    }
    const navigateFavoriteVideos = () => {
        navigate('/profile/favorite-videos')
    }
    return (
        <div dir='rtl' className='w-full h-full overflow-y-scroll overflow-x-hidden'>
            <div className='w-full h-auto relative max-w-[480px] mx-auto '>
                <div className="absolute top-[-44%] left-[50%] translate-x-[-57%] z-10 ">
                    <BackgroundBlurSVG/>
                </div>
                <div onClick={() => navigateSetting()} className="absolute -top-20 right-[7%]   z-50 ">
                    <ProfileGearwheelSVG/>
                </div>
                <div className="absolute -top-56 left-[50%] translate-x-[-170%] z-20 ">
                    <ProfileCurvedLineSVG/>
                </div>
                <div className="absolute -top-40 right-[-17%]  z-20 ">
                    <ProfileRightCurvedLine/>
                </div>
                <div className='bg-black-BG mt-24 z-30 flex flex-col  relative overflow-visible rounded-[30px]'>
                    <div className='w-full flex items-center justify-center -mt-20'>
                        {profile?.user?.is_premium ?
                            <ProfileSpecialAccountSVG className="absolute top-[0] left-[0]"/>
                            :
                            <ProfileDefaultPicSVG className="absolute top-[0] left-[0]"/>
                        }
                    </div>
                    {profile?.user?.is_premium ?
                        <p className='text-white text-[1.6rem] fa-format-200 w-full flex items-center justify-center mt-4'>
                            اعتبار ویژه:
                            <span className='text-[2.4rem] text-yellow fa-format-300 fa-num mr-2'>
                                {profile?.user?.premium_days_left}
                            </span>
                            <span className='text-[1.8rem] text-yellow fa-format-300 mr-2'>روز</span>
                        </p>
                        :
                        <p
                            className='text-white text-[1.6rem] fa-format-300 w-full flex items-center justify-center mt-10'
                        >
                            شما کاربر عادی هستید
                        </p>
                    }
                    <div className='!flex !items-center !justify-center mt-[6px]'>
                        <Button onClick={() => navigatePlans()}
                                className='!w-[183px] !h-[44px] !bg-blue !rounded-[20px]  !flex !items-center !justify-center'
                        >
                            {profile?.user?.is_premium && <ProfileCrownSVG/>}
                            <span className="mr-4 text-white fa-format-300 text-[1.6rem]">
                                {profile?.user?.is_premium ? 'تمدید حساب ویژه ' : ' ویژه شوید '}
                            </span>
                        </Button>
                    </div>
                    <Button
                        onClick={navigateFavoriteVideos}
                        className='!bg-black-box !px-8 !h-[72px] !rounded-[15px] !flex !items-center !justify-between !mt-10 !w-[90%] !mx-auto'
                    >
                        <div className='flex items-center gap-8'>
                            <ProfileWhiteHeartSVG/>
                            <p className='text-[1.4rem] text-white fa-format-300 flex items-center '>
                                ویدیوهای لایک شده
                            </p>
                        </div>
                        <ChevronLeftSVG/>
                    </Button>
                    <div className='flex items-start justify-between px-8 mt-12'>
                        {getProfileQuery.isLoading ?
                            <div className='flex items-center justify-between w-full'>
                                <ProfileSkeleton width={170} height={25}/>
                                <ProfileSkeleton width={70} height={18}/>
                            </div>
                            :
                            <>
                                <p
                                    style={{color: profile?.followed_artists?.meta_data?.title_color}}
                                    className='text-[1.8rem] fa-format-400 '
                                >
                                    {profile?.followed_artists?.meta_data?.title}
                                </p>
                                {profile?.followed_artists?.meta_data?.show_more &&
                                    <p
                                        style={{color: profile?.followed_artists?.meta_data?.show_more_color}}
                                        className='text-[1.4rem]  fa-forma-300 '
                                    >
                                        {profile?.followed_artists?.meta_data?.show_more_title}
                                    </p>
                                }
                            </>
                        }
                    </div>
                    <div className='whitespace-nowrap overflow-x-auto mt-4 overflow-y-hidden pr-8 h-[89px]'>
                        {getProfileQuery.isLoading ?
                            <>
                                {
                                    Array.from([1, 2, 3, 4, 5]).map((item, index) => (
                                        <div className='inline-block ml-10'>
                                            <Skeleton
                                                className="after:!animate-spin-slow  after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none"
                                                animation="wave"
                                                sx={{
                                                    ml: 2,
                                                    bgcolor: "rgb(110 107 161 / 11%)",
                                                    animationDuration: "0.80s !important"
                                                }} variant="circular" width={64} height={64}
                                            />
                                            <Skeleton
                                                className="after:!animate-spin-slow !mt-[1px] after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none  "
                                                animation="wave"
                                                sx={{
                                                    ml: 2,
                                                    bgcolor: "rgb(110 107 161 / 11%)",
                                                    animationDuration: "0.80s !important"
                                                }} variant="text" width={64} height={20}
                                            />
                                        </div>
                                    ))
                                }
                            </>
                            :
                            <>
                                {profile?.followed_artists?.artists?.map((item, index) => (
                                    <div key={index} className='inline-block ml-10 '>
                                        <div className='relative'>
                                            <LazyLoadImage
                                                className='w-[64px] h-[64px] absolute top-0 left-0 rounded-full object-cover'
                                                src={item?.cover?.small}
                                            />
                                            <ProfileMicrophoneSVG className="absolute top-0 left-0"/>
                                        </div>
                                        <p
                                            className='text-[1.2rem] leading-[18px] text-gray-A fa-format-300 w-full flex items-center justify-center mt-[6px]'
                                        >
                                            {item?.name}
                                        </p>
                                    </div>
                                ))}
                            </>
                        }
                    </div>
                    <div className='flex items-center justify-between px-8 mt-10 mb-4'>
                        {getProfileQuery.isLoading ?
                            <div className='flex items-center justify-between w-full'>
                                <ProfileSkeleton width={170} height={25}/>
                                <ProfileSkeleton width={70} height={18}/>
                            </div>
                            :
                            <>
                                <p
                                    style={{color: profile?.recently_watched_videos?.meta_data?.title_color}}
                                    className='text-[1.8rem] fa-format-400 '
                                >
                                    {profile?.recently_watched_videos?.meta_data?.title}
                                </p>
                                {profile?.recently_watched_videos?.meta_data?.show_more &&
                                    <p
                                        style={{color: profile?.recently_watched_videos?.meta_data?.show_more_color}}
                                        className='text-[1.4rem]  fa-forma-300 '
                                    >
                                        {profile?.recently_watched_videos?.meta_data?.show_more_title} </p>
                                }
                            </>}
                    </div>
                    <div className='whitespace-nowrap overflow-x-auto mb-[44px] pr-8 mt-1 h-[179.5px] '>
                        {getProfileQuery.isLoading ?
                            <> {
                                Array.from([1, 2, 3]).map((item, index) => (
                                    <div className='inline-block ml-8'>
                                        <ProfileSkeleton width={140} height={110} ml={2}/>
                                        <ProfileSkeleton width={40} height={15} mt={1} ml={2}/>
                                        <ProfileSkeleton width={100} height={15} mt={1} ml={2}/>
                                        <ProfileSkeleton width={70} height={15} mt={1} ml={2}/>
                                    </div>
                                ))}
                            </>
                            :
                            <>
                                {profile?.recently_watched_videos?.videos?.map((item, index) => (
                                    <div key={index} className='inline-block ml-8 relative '>
                                        <div className='relative'>
                                            <div className='relative'>
                                                <LazyLoadImage
                                                    className='w-[140px] h-[110px] object-cover rounded-[12px] absolute top-0 left-4'
                                                    src={item?.cover?.small}
                                                />
                                                <ProfileVideoPlaceholderSVG className="absolute top-0 left-2"/>
                                            </div>
                                            <p className='text-white text-[1.4rem] fa-format-300 mr-3 mt-[8px]'>
                                                {item?.artists.map((artist, index) => {
                                                    return (
                                                        <span key={index}>
                                                            {artist?.name} {index !== (item?.artists?.length - 1) && '، '}
                                                        </span>
                                                    )
                                                })}
                                            </p>
                                            <p className='text-[1.2rem] text-gray-A fa-format-200 mr-3 mt-1'>
                                                {item?.music_title}
                                            </p>
                                            <p className='text-[1rem] text-gray-A fa-format-200 mr-3 mt-2 fa-num'>
                                                {item?.view_count}
                                                <span className='mr-3'>پخش</span>
                                            </p>
                                            <p
                                                className='bg-[rgba(21,16,31,0.4)] absolute top-3 right-5 px-3 text-gray-A '
                                            >
                                                {item?.duration}
                                            </p>
                                        </div>

                                    </div>))
                                }
                            </>}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Profile