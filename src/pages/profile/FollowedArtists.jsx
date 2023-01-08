import React from 'react'
import BackgroundBlurSVG from '../../components/common/assets/BackgroundBlurSVG'
import {ToolBar} from '../../components/ToolBar/ToolBar'
import cartImage from "../../assets/images/home-item.png"
import FollowedArtistPlaceHolderSVG from '../../components/profile/assets/FollowedArtistPlaceHolderSVG'
import {Button} from '@mui/material'

function FollowedArtists() {
    return (
        <div dir="rtl" className='w-full h-full '>
            <div className='w-full h-full overflow-scroll max-w-[480px] mx-auto relative mt-28'>
                <div className="fixed top-[-27%] left-[50%] translate-x-[-50%] z-10">
                    <BackgroundBlurSVG/>
                </div>
                <ToolBar title=" هنرمندان دنبال شده "/>
                <div className='relative z-10 px-[22px] !pb-[110px] mt-[1px]'>
                    {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                        <div className='flex items-center justify-between mb-[12px]'>
                            <div className='flex items-center '>
                                <div className='relative'>
                                    <img
                                        src={cartImage}
                                        className='w-[80px] h-[80px] object-cover rounded-full absolute top-0 left-0'
                                    />
                                    <FollowedArtistPlaceHolderSVG className="absolute top-0 left-0"/>
                                </div>
                                <p className='text-white text-[1.4rem] fa-format-400 mr-[16px]'>عرفان</p>
                            </div>
                            <Button
                                variant='outlined'
                                className='!text-white !bg-[rgba(94,70,248,0.2)] !w-[108px] !h-[36px] !flex !items-center !justify-center !text-[1.2rem] !fa-format-400 !rounded-[30px] !border-[1px] !border-[#5E46F8]'
                            >
                                <p className='text-white'> دنبال میکنید</p>
                            </Button>
                        </div>)))
                    }
                </div>
            </div>
        </div>
    )
}

export default FollowedArtists