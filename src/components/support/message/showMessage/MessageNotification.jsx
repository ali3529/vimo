import React from 'react'
import {useSelector} from 'react-redux';
import {selectInitialData} from '../../../../redux/initialize/InitializeSlice';
import TicketAlertSvg from '../../assets/TicketAlertSvg'

function MessageNotification() {
    const {ticket_page_settings, user} = useSelector(selectInitialData);
    return (
        <div
            className='bg-black-box p-[12px] border-blue border-[1px] rounded-[15px] flex flex-row gap-3 items-center'
        >
            {
                user?.is_premium ?
                    <>
                        <img src={ticket_page_settings?.response_time_image}/>
                        <div className='w-full flex flex-col'>
                            <p className='fa-format-400 text-[1.4rem] leading-[24px] text-white'>
                                {ticket_page_settings?.premium_response_title}
                            </p>
                            <p className='fa-format-400 text-[1.2rem] leading-[24px] text-gray-A'>
                                {ticket_page_settings?.premium_response_time}
                            </p>
                        </div>
                    </>
                    :
                    <>
                        <img src={ticket_page_settings?.response_time_image}/>
                        <div className='w-full flex flex-col'>
                            <p className='fa-format-400 text-[1.4rem] leading-[24px] text-white'>
                                {ticket_page_settings?.not_premium_response_title}
                            </p>
                            <p className='fa-format-400 text-[1.2rem] leading-[24px] text-gray-A'>
                                {ticket_page_settings?.not_premium_response_time}
                            </p>
                        </div>
                    </>
            }

        </div>
    )
}

export default MessageNotification