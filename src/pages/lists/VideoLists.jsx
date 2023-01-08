import React from 'react'
import BackgroundBlurSVG from '../../components/common/assets/BackgroundBlurSVG'
import VideoListCardItem from '../../components/common/lists/VideoListCardITem'
import { ToolBar } from '../../components/ToolBar/ToolBar'

function VideoLists() {
  return (
    <div dir="rtl" className="w-full h-full flex flex-col">
    <div className="fixed top-[-27%] left-[50%] translate-x-[-50%] z-10">
        <BackgroundBlurSVG/>
    </div>
    <div className="w-full h-full relative flex flex-col bg-support-background max-w-[480px] mx-auto">
        <ToolBar title="جدیدترین ایرانی"/>
        <div className=" w-full flex overflow-scroll flex-col pb-6 bg-support-background mt-[15%]">
            <div className="w-full h-full justify-start items-start flex flex-col mt-[25px] px-[22px] z-10">
               
                <VideoListCardItem/>
            </div>
        </div>
    </div>
</div>
  )
}

export default VideoLists