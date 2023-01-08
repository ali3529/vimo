import React from 'react'

function MessageDetail({ticket}) {
  return (
    <div className="w-full h-full l flex flex-col rounded-b-[30px] bg-show-ticket-detail-bg"
   
>
   <div className="flex flex-col justify-between items-center  text-white w-full  p-[18px]">
       <div className="w-full flex flex-col ">
           <label className="text-yellow fa-format-300 text-[1.2rem]">
               عنوان:
           </label>
           <p className="fa-format-400 text-[1.4rem]  text-white mt-[4px] leading-[24px]">
             
               {ticket?.subject}
           </p>
       </div>

       <div className="flex flex-row w-full mt-[15px]">
           <div className="w-full flex flex-col ">
               <label className="text-yellow fa-format-300 text-[1.2rem]">
                   دسته بندی:
               </label>
               <p className="fa-format-300 text-[1.4rem] leading-6 text-white mt-[8px]">
                 {ticket?.faq_category?.title}
               </p>
           </div>
           <div className="w-full flex flex-col ">
               <label className="text-yellow fa-format-300 text-[1.2rem]">
                   وضعیت:
               </label>
               <p className="fa-format-300 text-[1.4rem] leading-6 text-white mt-[8px]">
                  {ticket?.ticket_status?.title}
               </p>
           </div>
       </div>

       <div className="flex flex-row w-full mt-[12px]">
           <div className="w-full flex flex-col ">
               <label className="text-yellow fa-format-300 text-[1.2rem]">
                   {" "}
                   کد تیکت:
               </label>
               <p className="fa-format-300 text-[1.4rem] leading-6 text-white mt-[8px] fa-num">
               {ticket?.ticket_code}
               </p>
           </div>
           <div className="w-full flex flex-col ">
               <label className="text-yellow fa-format-300 text-[1.2rem]">
                   تاریخ ایجاد:
               </label>
               <p dir="ltr"
                  className="fa-format-300 text-end text-[1.4rem] leading-6 text-white mt-[8px] fa-num"
               >
                {ticket?.changed_at}
               </p>
           </div>
       </div>
   </div>
</div>
  )
}

export default MessageDetail