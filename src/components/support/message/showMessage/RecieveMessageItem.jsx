import React from 'react'
import ShowMessageFileItemSVG from '../../assets/ShowMessageFileItemSVG'
import ShowTicketAvatarSvg from '../../assets/ShowTicketAvatarSvg'

function ReceiveMessageItem({messageDetail}) {
    const handleOpenFile = (link) => {
        window.open(link, '_blank', 'toolbar=0,location=0,menubar=0');
      }
    return (
        <div className='w-full flex flex-row-reverse gap-3 relative'>
             <span>
                 <ShowTicketAvatarSvg/>
                 <img className='w-[44px] h-[44px] rounded-[12px] absolute top-0 z-10' src={messageDetail?.admin?.avatar_url}/>
              </span>
            <div className='w-full bg-black-box rounded-tr-[30px] rounded-bl-[30px] rounded-br-[30px] p-[18px]'>
                <div className='w-full flex flex-row-reverse justify-between '>
                    <p className='fa-format-400 text-[1.4rem] leading-6 text-white'>{messageDetail?.admin?.full_name}</p>
                    <p dir='ltr'
                       className='fa-format-400 text-[1.4rem] leading-6 text-gray-B fa-num'>{messageDetail?.date}</p>
                </div>
                <div className='w-full mt-[12px]'>
                    <p className='fa-format-400 text-[1.2rem] leading-[24px] text-white'>{messageDetail?.description}</p>
                </div>
                <div className="w-full flex flex-col gap-2 mt-3">
                    {
                        messageDetail?.files && messageDetail?.files?.map(item =>
                            <div className="w-[80%] bg-gray-B rounded-[12px] line-clamp-1  flex flex-row gap-3 p-3 items-center"
                            onClick={()=>handleOpenFile(item?.url)}
                            >
                                <span>
                                <ShowMessageFileItemSVG/>
                                </span>
                                <p className="text-[1.4rem] fa-format-300 w-64 truncate text-white">{item?.file_name}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ReceiveMessageItem