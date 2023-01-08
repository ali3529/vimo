import {Button} from '@mui/material'
import React from 'react'
import InactiveSessionsGearwhealSVG from '../../components/manageActiveDevices/assets/InactiveSessionsGearwhealSVG'
import InactiveSessionsUserWithDevicesSVG
    from '../../components/manageActiveDevices/assets/InactiveSessionsUserWithDevicesSVG'

function InactiveSessions() {
    return (
        <div className='w-full h-full overflow-scroll'>
            <div
                className='w-full h-full relative flex flex-col bg-black-BG max-w-[480px] mx-auto mt-[17rem] overflow-scroll'
            >
                <div className='flex w-full items-center justify-center'>
                    <InactiveSessionsUserWithDevicesSVG/>
                </div>
                <div className='w-[80%] mx-auto text-[1.4rem] text-white text-center leading-8 fa-format-300'>
                    <p className='mt-14'>
                        در حال استفاده از ویمو با دستگاه دیگری هستید
                    </p>
                    <p className='mt-5'>
                        Iphone 13 pro :دستگاه
                    </p>
                    <p className='mt-5'>
                        استفاده دو دستگاه همزمان از یک اکانت، ممکن نیست
                    </p>
                    <div className='flex item-center justify-center mt-16'>
                        <Button
                            className='!w-[238px] !h-[48px] !rounded-[20px] !text-[1.6rem] !bg-blue !flex !items-center !justify-center'
                        >
                            <p className='text-white fa-format-300'> استفاده در این دستگاه</p>
                        </Button>
                    </div>
                    <div className='flex items-center justify-center'>
                        <Button className='!flex !item-center !justify-center !mt-10 !gap-4'>
                            <div className='text-yellow text-[1.4rem] fa-format-300'>
                                مدیریت دستگاه های فعال
                            </div>
                            <InactiveSessionsGearwhealSVG/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InactiveSessions