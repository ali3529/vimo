import {Button} from '@mui/material';
import {useMutation} from '@tanstack/react-query';
import * as React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import BackgroundBlurSVG from '../../components/common/assets/BackgroundBlurSVG';
import VideoCardItem from '../../components/common/VideoCardItem';
import VideoCartItemShimmer from '../../components/common/VideoCartItemShimmer';
import ClearSearchSVG from '../../components/search/assets/ClearSearchSVG';
import SearchEmptySearchSVG from '../../components/search/assets/SearchEmptySearchSVG';
import SearchMagnifierSVG from '../../components/search/assets/SearchMagnifierSVG';
import SearchNotFoundSVG from '../../components/search/assets/SearchNotFoundSVG';
import {ToolBar} from '../../components/ToolBar/ToolBar';
import {selectSearch, setSearchData} from '../../redux/search/SearchSlice';
import {searchVideos} from '../../service/ApiClient';

export const Search = () => {
    const [search, setSearch] = useState("")
    const [videos, setVideos] = useState(null)
    const [loading, setLoading] = useState(false)
    const searchSelector = useSelector(selectSearch)
    const dispatch = useDispatch()
    const searchVideosMutation = useMutation((search) => searchVideos(search), {
        onSuccess: (res) => {
            setVideos(res?.data?.result?.videos)
            storeSearchData(res?.data?.result?.videos)
            setLoading(false)
        }
    })

    useEffect(() => {
        setSearch(searchSelector.searchKey)
        setVideos(searchSelector.search)
    }, [])

    const handleSearchVideos = (s) => {
        setSearch(s)
    }

    const onClickSearchVideos = () => {
        setLoading(true)
        searchVideosMutation.mutate(search)
    }

    const storeSearchData = (data) => {
        dispatch(setSearchData({search: data, searchKey: search}))
    }

    const clearSearchData = () => {
        dispatch(setSearchData({search: videos, searchKey: ""}))
    }

    const clearSearch = () => {
        setSearch("")
        clearSearchData()
    }

    const showSearchItem = () => {
        if (videos != null) {
            if (videos.length != 0) {
                return <div dir='ltr'
                            className='w-full gap-7 mt-[24px] grid grid-cols-2 justify-between items-center z-30 mb-24 '>
                    {videos.map(item =>
                        <>
                            <VideoCardItem item={item}/>
                        </>
                    )}
                </div>
            } else {
                return <>
                    <div className="flex items-center justify-center mt-24">
                        <SearchNotFoundSVG/>
                    </div>
                    <div className="text-[14px] text-gray-A fa-format-400 flex items-center justify-center mt-14">
                        نتیجه ای یافت نشد.
                    </div>
                </>
            }
        }
    }

    return (
        <div className="w-full relative h-full bg-[#0F0817]" dir="rtl">
            <div className="w-full h-full container max-w-[480px] mx-auto">
                <div className="fixed top-[-27%] left-[50%] translate-x-[-50%] z-10">
                    <BackgroundBlurSVG/>
                </div>
                <div className="w-full h-full px-9 flex flex-col overflow-scroll">
                    <div className="mt-28 w-full flex items-center justify-between">
                        <ToolBar  ContainerStyle={""} style={"!backdrop-blur-none"} title="جستجو"/>
                    </div>
                    <div
                        className="bg-[#28242D] h-[48px] z-20 mt-10 pr-10 rounded-[15px] flex items-center transition-all ease-linear duration-700">
                        {
                            search ? <span className='lg:cursor-pointer' onClick={() => clearSearch()}>
                                <ClearSearchSVG/>
                            </span>
                                : <SearchMagnifierSVG/>
                        }
                        <input
                            className="bg-transparent text-white py-4 pr-4 mb-1 flex-1 mr-1 focus:outline-none text-[1.4rem] fa-format-400 placeholder:text-gray-A"
                            placeholder="جستجو"
                            value={search}
                            onChange={(e) => handleSearchVideos(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && !loading && onClickSearchVideos()}
                        />
                        <div className='h-full p-2 w-[100px]'>
                            {
                                search && <Button
                                    className='!bg-blue h-full !w-full !rounded-[12px] '
                                    onClick={() => !loading && onClickSearchVideos()}
                                >
                                    <span className='!text-[1.4rem] !text-white fa-format-500  leading-[22px]'> جستجو</span>
                                </Button>
                            }
                        </div>
                    </div>
                    {
                        videos == null && !loading && <>
                            <div className="flex items-center justify-center mt-24">
                                <SearchEmptySearchSVG/>
                            </div>
                            <div className="text-[14px] text-gray-A fa-format-400 flex items-center justify-center mt-14">
                                نام هنرمند یا آهنگ را وارد کنید
                            </div>
                        </>
                    }
                    <div className='z-20'>
                        {
                            loading ?
                                <div className='w-full'>
                                    <VideoCartItemShimmer/>
                                </div>
                                : showSearchItem()
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
