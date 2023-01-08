import {Box, Button, LinearProgress} from '@mui/material'
import React from 'react'
import {formatBytes} from '../../../utils/helper/CovertByte';
import CreateTicketGreenTickSVG from '../../support/assets/CreateTicketGreenTickSVG'
import CreateTicketMultiplySVG from '../../support/assets/CreateTicketMultiplySVG';
import CreateTicketPauseButtonSVG from '../../support/assets/CreateTicketPauseButtonSVG';
import CreateTicketTrashCanSVG from '../../support/assets/CreateTicketTrashCanSVG'

function UploadedItem({item, index, deleteItem, percentage, controller}) {

    const cancelUploadHandler = () => {
        controller.abort()
    }

    return (
        <div className='w-full'>
            <div
                className='!bg-[rgba(94,70,248,0.2)] h-fit p-6 rounded-[16px] flex flex-col items-center justify-end px-8 border-[1px] border-blue'
            >
                <div className='flex items-center justify-center gap-4 w-full'>
                    <div className='flex flex-col items-end w-full'>
                        <div className='flex flex-row w-full justify-between'>
                            <div className='flex gap-3 '>
                                <span onClick={() => cancelUploadHandler()}>
                                <CreateTicketMultiplySVG/>
                                </span>
                            </div>
                            <p dir='ltr' className='text-[1.4rem] fa-format-300 text-white truncate w-60'>
                                {item?.name}
                            </p>
                        </div>
                        <p  dir='ltr' className='fa-num fa-format-500 text-gray-A text-[1.2rem]'>
                            {formatBytes(item?.size, 2)}
                        </p>
                    </div>
                </div>
                <Box dir="ltr" className="!mt-3 !flex items-center justify-between !gap-2 !rounded-[100px]" sx={{width: '100%'}}>
                    <LinearProgress className='!bg-white !w-[90%] !rounded-[100px]' variant="determinate" value={percentage}/>
                    <span className='text-[1.2rem] fa-format-500 text-gray-A'>{percentage}%</span>
                </Box>
            </div>
        </div>
    )
}

export default UploadedItem