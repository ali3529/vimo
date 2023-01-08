import {Button, LinearProgress} from '@mui/material'
import {Box} from '@mui/system';
import React from 'react'
import {formatBytes} from '../../../utils/helper/CovertByte';
import CreateTicketGreenTickSVG from '../../support/assets/CreateTicketGreenTickSVG'
import CreateTicketMultiplySVG from '../../support/assets/CreateTicketMultiplySVG';
import CreateTicketPauseButtonSVG from '../../support/assets/CreateTicketPauseButtonSVG';
import CreateTicketTrashCanSVG from '../../support/assets/CreateTicketTrashCanSVG'

function SelectedItem({item, index, deleteItem}) {

    return (
        <div className='w-full'>
            <div
                className='!bg-[rgba(94,70,248,0.2)] h-[65px] rounded-[16px] flex items-center justify-end px-8 border-[1px] border-blue'
            >
                <div className='flex items-center justify-center gap-4'>
                    <div className='flex flex-col items-end'>
                        <p dir='ltr' className='text-[1.4rem] fa-format-300 text-white truncate w-96'>
                            {item?.name}
                        </p>
                        <p dir='ltr' className='fa-num fa-format-500 text-gray-A text-[1.2rem]'>
                            {formatBytes(item?.size, 2)}
                        </p>
                    </div>
                    <span onClick={() => deleteItem(index)}>
                         <CreateTicketTrashCanSVG/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SelectedItem