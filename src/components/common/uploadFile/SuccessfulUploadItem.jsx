import React from 'react'
import {formatBytes} from '../../../utils/helper/CovertByte'
import CreateTicketGreenTickSVG from '../../support/assets/CreateTicketGreenTickSVG'
import CreateTicketTrashCanSVG from '../../support/assets/CreateTicketTrashCanSVG'

function SuccessfulUpload({item, index, deleteItem}) {
    return (<div className='w-full'>
            <div
                className='!bg-[rgba(94,70,248,0.2)] h-[65px] rounded-[16px] flex items-center justify-end px-8 border-[1px] border-blue'
            >
                <div className='flex items-center justify-center gap-4 w-full'>
                    <div className='flex flex-row items-ce justify-between w-full'>
                        <CreateTicketGreenTickSVG/>
                        <div>
                            <p dir='ltr' className='text-[1.4rem] fa-format-300 text-white truncate w-52'>
                                {item?.name}
                            </p>
                            <p  dir='ltr' className='fa-num fa-format-500 text-left text-green text-[1.2rem]'>
                                {formatBytes(item?.size, 2)}
                            </p>
                        </div>
                    </div>
                    <span onClick={() => deleteItem(index)}>
                          <CreateTicketTrashCanSVG/>
                    </span>
                </div>
            </div>
        </div>)
}

export default SuccessfulUpload