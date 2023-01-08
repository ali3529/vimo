import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import BackgroundBlurSVG from '../../components/common/assets/BackgroundBlurSVG'
import {ToolBar} from '../../components/ToolBar/ToolBar'

function AboutUsSingleItem() {
    const [item, setItem] = useState({})

    const location = useLocation()
    useEffect(() => {
        setItem(location?.state?.item)
    }, [])

    return (
        <div dir="rtl" className="w-full h-full  overflow-scroll flex flex-col">
            <div className="fixed top-[-27%] left-[50%] translate-x-[-50%] z-10">
                <BackgroundBlurSVG/>
            </div>
            <div className="w-full h-full relative flex flex-col bg-support-background max-w-[480px] mx-auto">
                <ToolBar title={item?.title}/>
                <div className=" w-full flex overflow-scroll pb-32 flex-col  bg-support-background mt-[50px] px-[22px]">
                    <div
                        className="w-full h-auto  justify-start items-start   flex flex-col bg-black-box  mt-[25px] p-7 rounded-[15px]  z-10">
                        <p className='fa-format-400 text-gray-A text-[1.4rem] h-full  leading-[25px]'> {item?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsSingleItem