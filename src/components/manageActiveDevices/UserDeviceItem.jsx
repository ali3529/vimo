import { useMutation } from "@tanstack/react-query";
import React from "react";
import { deleteUserDevices } from "../../service/ApiClient";
import TrashcanSVG from "./assets/TrashcanSVG";

function UserDeviceItem({ item,deviceActive,getUserDevices }) {
    const deleteDeviceMutation=useMutation((token)=>deleteUserDevices(token),{
        onSuccess:(res)=>{
            // Toast(res?.data?.result?.message)
    getUserDevices.refetch()
        }
    })

    const handleDeleteDevice=(token)=>{
        deleteDeviceMutation.mutate(token)
    }
    return (
        <div className="w-full flex  pr-4 bg-[#28242D] justify-between items-center h-auto min-h-[72px] rounded-[15px] ">
            <div className="flex items-center gap-3 py-3 ">
                <div
                    className={`w-[10px] h-[10px]  ml-[12px] rounded-[50%] 
                    ${deviceActive ? "bg-green" : "bg-gray-icon"}
                    `}
                ></div>
                <div className="flex flex-col">
                    <div className="flex">
                        <div className=" font-[poppins] font-[500] text-[1.2rem] min-[350px]:!text-[1.4rem] leading-[24px] text-white ml-1 mb-3">
                          {item?.name}
                        </div>
                        {deviceActive && (
                            <div className="fa-format-500 font-[500] text-[1.4rem] leading-[21.91px] text-green mr-1">
                                (فعال)
                            </div>
                        )}
                    </div>
                    <div className="flex">
                        <div
                            className={`text-[1.2rem] fa-format-400  leading-[16px] ml-2 
                            ${deviceActive ? "text-green" : "text-gray-A"}
                            `}
                        >
                            آخرین بازدید:
                        </div>
                        <div
                            className={`text-[1.4rem] fa-format-400  fa-num leading-[16px] 
                            ${deviceActive ? "text-green" : "text-gray-A"}
                            `}
                        >
                            {item?.last_used_at}
                        </div>
                        <div
                            className={`text-[1.4rem] fa-format-400  fa-num leading-[16px] mr-1 ml-1 
                            ${deviceActive ? "text-green" : "text-gray-A"}
                            `}
                        >
                            
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className="flex w-[20%] justify-end pl-4 md:cursor-pointer ">
                <div className={`flex w-[30px] h-[30px] ${deleteDeviceMutation.isLoading&&"animate-ping"}`} onClick={()=>handleDeleteDevice(item?.token)}>
                    <TrashcanSVG />
                </div>
            </div>
        </div>
    );
}

export default UserDeviceItem;
