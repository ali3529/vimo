import React, {useRef, useState} from "react";
import {ToolBar} from "../../components/ToolBar/ToolBar";
import UserDeviceItem from "../../components/manageActiveDevices/UserDeviceItem";
import TrashcanSVG from "../../components/manageActiveDevices/assets/TrashcanSVG";
import LogOutSvg from "../../components/manageActiveDevices/assets/LogOutSvg";
import BackgroundBlurSVG from "../../components/common/assets/BackgroundBlurSVG";
import {useMutation, useQuery} from "@tanstack/react-query";
import {deleteOtherUserDevices, userDevices} from "../../service/ApiClient";
import {useDispatch} from "react-redux";
import {logout} from "../../redux/login/LoginSlice";
import ConfirmLogOutDialog from "../../components/common/ConfirmLogOutDialog";

function ManageActiveDevices(props) {
    const [currentDeviceActive, setCurrentDeviceActive] = useState(true);
    const [devices, setDevices] = useState([])
    const logOutDialogRef = useRef()
    const getUserDevices = useQuery(["getUserDevices"], () => userDevices(), {
        onSuccess: (res) => {
            setCurrentDeviceActive(res?.data?.result?.active_device)
            setDevices(res?.data?.result?.inactive_devices)
        }
    })

    const deleteOtherUserDevicesMutation = useMutation(() => deleteOtherUserDevices(), {
        onSuccess: (res) => {
            getUserDevices.refetch()
        }
    })

    const handleDeleteOtherDevice = () => {
        deleteOtherUserDevicesMutation.mutate()
    }

    //handling logout
    const handleLogout = () => {
        logOutDialogRef.current.openDialog()
    }

    return (
        <div
            className=" w-full h-full  overflow-scroll pb-11 bg-black-BG relative "
            dir="rtl"
        >
            <ConfirmLogOutDialog ref={logOutDialogRef}/>
            <div className="w-full h-full relative z-1 container max-w-[640px] mx-auto ">
                <div className="fixed top-[-27%] left-[50%] translate-x-[-50%] z-10">
                    <BackgroundBlurSVG/>
                </div>
                <ToolBar title="مدیریت دستگاه های فعال"/>
                <div className="w-full flex flex-col px-[22px]  mt-[24px] relative z-20">
                    <div
                        className="flex flex-col !w-full h-[114px] justify-between items-start p-[16px] bg-manage-active-devices-box-background bg-no-repeat
                                     max-w-[364px] mx-auto bg-right mt-[65px]"
                    >
                        <div className="text-[1.6rem] fa-format-400 text-gray-A leading-[25px]">
                            این دستگاه:
                        </div>
                        <div className="flex items-center">
                            <div
                                className={`w-[10px] h-[10px]  ml-[12px] rounded-[50%] 
                                ${currentDeviceActive?.active ? "bg-green" : "bg-gray-icon"}
                                `}
                            ></div>
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <div
                                        className="font-[poppins] font-[500] text-[1.6rem] leading-[24px] text-white ml-1">
                                        {currentDeviceActive?.name}
                                    </div>
                                    {currentDeviceActive?.active ? (
                                        <div
                                            className="fa-format-500 font-[500] text-[1.4rem] leading-[21.91px] text-green mr-1">
                                            (فعال)
                                        </div>
                                    ) : (
                                        <div
                                            className="fa-format-500 font-[500] text-[1.4rem] leading-[21.91px] text-red mr-1">
                                            (غیر فعال)
                                        </div>
                                    )}
                                </div>
                                <div className="text-[1.4rem] fa-format-400 text-gray-A leading-[22px]">
                                    دستگاه من
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-7 items-center md:cursor-pointer ">
                        <div className="w-[16px] h-[16px] ml-[10px]">
                            <LogOutSvg color={"#BBB8C2"}/>
                        </div>
                        <div className="text-[1.4rem] fa-format-500 text-gray-A leading-[24px]"
                             onClick={() => handleLogout()}
                        >
                            خروج از حساب کاربری
                        </div>
                    </div>
                    <div className="flex mt-10 ">
                        <div className="text-[1.4rem] fa-format-500 text-white leading-[22px] ">
                            دستگاه های دیگر
                        </div>
                    </div>
                    <div className="flex flex-col w-full mt-3 mb-4 gap-3">
                        {
                            devices?.map(item =>

                                <UserDeviceItem getUserDevices={getUserDevices} item={item}
                                                deviceActive={item?.active}
                                />
                            )
                        }
                    </div>
                    <div
                        className={`flex mt-6 items-center md:cursor-pointer ${deleteOtherUserDevicesMutation.isLoading && "animate-pulse"}`}
                        onClick={() => handleDeleteOtherDevice()}
                    >
                        <div className="w-[30px] h-[30px] ml-[10px] ">
                            <TrashcanSVG/>
                        </div>
                        <div className="text-[1.4rem] fa-format-500 text-red leading-[24px]">
                            حذف همه دستگاه های دیگر
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManageActiveDevices;
