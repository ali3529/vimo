import React from 'react'
import {formatBytes} from '../../../utils/helper/CovertByte'
import CreateTicketExclamationPoint from '../../support/assets/CreateTicketExclamationPoint'
import CreateTicketTrashCanSVG from '../../support/assets/CreateTicketTrashCanSVG'

function ErrorUpload({item, index, deleteItem}) {
    return (
        <div className='w-full'>
            <div
                className='!bg-[rgba(94,70,248,0.2)] h-[65px] rounded-[16px] flex items-center justify-between px-8 border-[1px] border-blue'
            >
                {
                    item?.cancelFile 
                    ?<p className='text-red text-[1.2rem] fa-format-300'>کنسل شده</p>
                    : <p className='text-red text-[1.2rem] fa-format-300'>خطا در بارگذاری فایل</p>
                }
                <div className='flex items-center justify-center gap-4'>
                    <div className='flex flex-col items-end'>
                    <p dir='ltr' className='text-[1.4rem] fa-format-300 text-white truncate w-48'>
                            {item?.name}
                        </p>
                        <p  dir='ltr' className='fa-num fa-format-500 text-green text-[1.2rem]'>
                            {formatBytes(item?.size, 2)}
                        </p>
                    </div>
                    <span onClick={() => deleteItem(index)}>
                        <CreateTicketTrashCanSVG/>
                    </span>
                </div>
            </div>
            {!item?.cancelFile &&
                <div className='h-[70px] rounded-[16px] px-8 border-[1px] border-red  mt-5 flex items-center gap-4'>
                    <CreateTicketExclamationPoint/>
                    <div className=' flex items-start flex-col'>
                        {/* <p className='text-red text-[1.4rem] fa-format-400'>بیش از حد مجاز انتخاب کرده اید</p> */}
                        <p className='text-gray-A text-[1.4rem] fa-format-400'>
                            {/* شما مجار به بارگذاری حداکثر ۱۰ فایل هستید */}
                            {item?.errorMessage}
                        </p>
                    </div>
                </div>
            }
        </div>
    )
}

export default ErrorUpload