import React from 'react'
import BackgroundBlurSVG from '../../components/common/assets/BackgroundBlurSVG'
import {ToolBar} from '../../components/ToolBar/ToolBar'
import {LazyLoadImage} from 'react-lazy-load-image-component';
import cartImage from "../../assets/images/home-item.png"
import FavoriteVideoPlaceHolderSVG from '../../components/profile/assets/FavoriteVideoPlaceHolderSVG';
import FavoriteVideoPlayButtonSVG from '../../components/profile/assets/FavoriteVideoPlayButtonSVG';
import FavoriteVideoMagnifierSVG from '../../components/profile/assets/FavoriteVideoMagnifierSVG';
import FavoriteVideoEmptyListSVG from '../../components/profile/assets/FavoriteVideoEmptyListSVG';
import FavoriteVideoBlueHeartSVG from '../../components/profile/assets/FavoriteVideoBlueHeartSVG';

function FavoriteVideos() {
    const favoriteVideosCount = 10
    return (
        <div dir="rtl" className='w-full h-full'>
            <div className='w-full h-full overflow-scroll max-w-[480px] mx-auto relative'>
                <div className="fixed top-[-27%] left-[50%] translate-x-[-50%] z-10">
                    <BackgroundBlurSVG/>
                </div>
                <ToolBar title="ویدیوهای لایک شده"/>
                {
                    favoriteVideosCount ?
                        <div className='relative z-30 px-[22px] pb-[40px]'>
                            <div className='bg-black-box mt-28 rounded-[20px] h-[48px] flex items-center pr-8'>
                                <FavoriteVideoMagnifierSVG/>
                                <input
                                    className='h-full w-full rounded-[20px] focus:outline-0 text-gray-A text-[1.4rem] px-3 fa-format-400'
                                    placeholder='جستجو در لایک شده ها'
                                    type="text"
                                />
                            </div>
                            <div className='flex justify-between items-center mt-10 mb-[12px]'>
                                <div className='flex items-center gap-4'>
                                    <FavoriteVideoPlayButtonSVG/>
                                    <p className='text-[1.4rem] text-white fa-format-300'>پخش همه</p>
                                </div>
                                <p className='text-[1.4rem] text-white fa-format-300 '>۱۶۲ ویدیو</p>
                            </div>
                            {
                                Array.from([1, 2, 3, 4, 5, 6, 7].map(() => (
                                    <div
                                        className='bg-black-box h-[92px] rounded-[15px] mt-[10px] flex items-center pr-[12px] pl-[17px] justify-between'
                                    >
                                        <div className='flex gap-3'>
                                            <div className='relative w-[100px] h-[68px]'>
                                                <LazyLoadImage
                                                    className='w-[100px] h-[68px] object-cover rounded-[10px] absolute top-0 left-0'
                                                    src={cartImage}
                                                />
                                                <FavoriteVideoPlaceHolderSVG className="absolute top-0 left-0"/>
                                            </div>
                                            <div className='flex flex-col mr-2'>
                                                <p className='text-[1.4rem] text-white fa-format-400 '>ابی</p>
                                                <p className='text-gray-A text-[1.2rem] fa-format-300 mt-1'>
                                                    وقتی تو گریه میکنی
                                                </p>
                                                <p className='text-gray-B text-[1rem] fa-format-300 mt-[10px]'> پخش
                                                    ۶۸۱,۶۲۰ </p>
                                            </div>
                                        </div>
                                        <FavoriteVideoBlueHeartSVG/>
                                    </div>)))
                            }
                        </div>
                        :
                        <div className='flex flex-col items-center  h-full mt-72'>
                            <FavoriteVideoEmptyListSVG/>
                            <p className='text-gray-A text-[1.4rem] fa-format-300 mt-12'>
                                هنوز ویدیوی مورد علاقه ای وجود ندارد!
                            </p>
                        </div>
                }
            </div>
        </div>
    )
}

export default FavoriteVideos