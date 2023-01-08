import * as React from "react";
import {
    Button,
} from "@mui/material";
import { ToolBar } from "../../components/ToolBar/ToolBar";
import SwipeBottomSheet from "../../components/bottomSheet/SwipeBottomSheet";
import BottomSheetHeader from "../../components/bottomSheet/BottomSheetHeader";
import SettingPhoneIconSVG from "../../components/setting/assets/SettingPhoneIconSVG";
import ShareIconSVG from "../../components/common/assets/ShareIconSVG";
import CameraIconSVG from "../../components/common/assets/CameraIconSVG";
import SettingExitIconSVG from "../../components/setting/assets/SettingExitIconSVG";
import BackgroundBlurSVG from "../../components/common/assets/BackgroundBlurSVG";
import SettingExclamationMarkSVG from "../../components/setting/assets/SettingExclamationMarkSVG";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUserData, userData } from "../../redux/login/LoginSlice";
import { selectInitialData } from "../../redux/initialize/InitializeSlice";
import { useState } from "react";
import SettingGreenThickSVG from "../../components/setting/assets/SettingGreenThickSVG";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getSetting, postStreamQuality } from "../../service/ApiClient";
import { useEffect } from "react";
import ConfirmLogOutDialog from "../../components/common/ConfirmLogOutDialog";
import { useRef } from "react";


export const Setting = () => {
    const [openQuality, setOpenQuality] = React.useState(false);
    const user = useSelector(selectUserData)
    const initialData = useSelector(selectInitialData)
    const [selectedQuality, setSelectedQuality] = useState({})
    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logOutDialogRef=useRef()
    const getSettingQuery = useQuery(["getSettingQuery"], () => getSetting(), {
        onSuccess: (res) => {
            if (res.data.done) {
                dispatchUserData(res?.data?.result?.user)
            }
        },
        refetchOnWindowFocus: false,
    })
    useEffect(() => {
        setSelectedQuality(user?.stream_quality)
    }, [user])

    //sending quality that user selected to the server
    const stramQualityMutation = useMutation((streamQuality) => postStreamQuality(streamQuality), {
        onSuccess: () => {
            queryClient.invalidateQueries(["getSettingQuery"])
        }
    })

    //handle open bottomSheet
    const toggleQualityDrawer = (newOpen) => () => {
        setOpenQuality(newOpen);
    };
    const handleOpenQuality = () => {
        setOpenQuality(!openQuality);
    };
    //handle clicking for navigate 
    const navigateAboutUs = () => {
        navigate('/about-us')
    }
    const navigateActiveDevices = () => {
        navigate('/manage-active-devices')
    }

    const navigateEditProfile = () => {
        navigate("/profile/edit")
    }
    //handle clicking on qualities
    const handleClickQuality = (quality) => {
        stramQualityMutation.mutate({ stream_quality_id: quality?.id })
        const data = { ...user, stream_quality: quality }
        // user.stream_quality = quality
        dispatchUserData(data)
        setSelectedQuality(quality)
        setOpenQuality(false)
    }
    // upadate initialize request
    const dispatchUserData = (Data) => {
        dispatch(
            userData({
                user: Data,
            })
        );
    };
    //handling logout
    const handleLogout = () => {
        logOutDialogRef.current.openDialog()
    }

    return (
        <div className="w-full h-full relative bg-[#0F0817] overflow-scroll pb-11" dir="rtl">
             <ConfirmLogOutDialog ref={logOutDialogRef}/>
            <div className="w-full h-full container max-w-[480px] mx-auto">
                <div className="fixed top-[-27%] left-[50%] translate-x-[-50%] z-10">
                    <BackgroundBlurSVG />
                </div>
                <div className="w-full">
                    <ToolBar title="تنظیمات" />
                </div>
                <div className="w-full  flex flex-col h-full">
                    <div className="z-20 mt-32 flex flex-col gap-5 items-center justify-center">
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-[1.8rem] fa-format-500 text-white">
                                {user?.full_name}
                            </p>
                            <p className=" fa-format-700  text-[1.4rem] text-gray-B ss03 fa-num">
                                {user?.phone}
                            </p>
                        </div>
                        <Button
                            onClick={navigateEditProfile}
                            className="!bg-blue !text-white !text-[1.6rem] fa-format-300 !w-[156px] !h-[44px] !rounded-[23px]"
                        >
                            <div className="text-white fa-format-400">
                                ویرایش پروفایل
                            </div>
                        </Button>
                    </div>
                    <div className="flex flex-col w-[88%] mx-auto gap-3 items-center justify-center mt-8 z-20">
                        <Button
                            onClick={handleOpenQuality}
                            className="!bg-black-box !px-8 !h-[56px] !rounded-[15px] !w-full !flex !items-center !justify-between"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-[24px] h-[16px]">
                                    <CameraIconSVG />
                                </div>
                                <p className="text-[1.2rem] min-[380px]:text-[1.4rem] text-white fa-format-300">
                                    کیفیت پخش پیش فرض
                                </p>
                            </div>
                            <p className="fa-format-400 text-[1.2rem] sm-500:text-[1.4rem] text-gray-A">
                                {selectedQuality?.title}
                            </p>
                        </Button>
                        <Button
                            className="!bg-black-box !px-8 !h-[56px] !rounded-[15px] !w-full !flex !items-center !justify-start !gap-8"
                        >
                            <div className="w-[20px] h-[23px]">
                                <ShareIconSVG />
                            </div>
                            <p className="text-[1.2rem] min-[380px]:text-[1.4rem] text-white fa-format-300">
                                اشتراک گذاری اپلیکیشن
                            </p>
                        </Button>
                        <Button
                            onClick={navigateActiveDevices}
                            className="!bg-black-box !px-8 !h-[56px] !rounded-[15px] !w-full !flex !items-center !justify-between !gap-8"
                        >
                            <div className="flex items-center gap-10">
                                <SettingPhoneIconSVG />
                                <p className="text-[1.2rem] min-[380px]:text-[1.4rem] text-white fa-format-300">
                                    مدیریت دستگاه های فعال
                                </p>
                            </div>
                            <p className="fa-format-400 text-[1.2rem] min-[380px]:text-[1.4rem] text-gray-A fa-num">
                                {user?.active_devices_count} دستگاه
                            </p>
                        </Button>
                        <Button
                            onClick={navigateAboutUs}
                            className="!bg-black-box !px-8 !h-[56px] !rounded-[15px] !w-full !flex !items-center !justify-start !gap-8 !mb-32"
                        >
                            <SettingExclamationMarkSVG />
                            <p className="text-[1.2rem] min-[380px]:text-[1.4rem] text-white fa-format-300">
                                {" "}
                                درباره ما
                            </p>
                        </Button>
                    </div>
                    <div
                        className="text-[14px] max-w-[480px] right-[50%] translate-x-[50%] fixed bottom-0 text-gray-A fa-format-400 flex items-center justify-center mt-14 w-full z-40 cursor-pointer shadow-2xl pb-[20px] backdrop-blur-xl "
                    >
                        <div className='w-[88%] mx-auto'>
                            <Button
                                onClick={handleLogout}
                                className="!bg-[#EB5757]  !h-[48px] !rounded-[15px] !w-full !mx-auto !flex !items-center !gap-4 !justify-center !cursor-none sm-500:!cursor-pointer "
                            >
                                <SettingExitIconSVG />
                                <p className="text-[1.6rem] text-white fa-format-300"> خروج از حساب کاربری </p>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <SwipeBottomSheet
                Header={<BottomSheetHeader title="کیفیت پخش" />}
                Content={
                    <div dir="rtl" className="flex flex-col items-start w-full justify-start">
                        {initialData?.stream_qualities?.map((item, index) => (
                            <Button
                                onClick={() => handleClickQuality(item)}
                                key={index}
                                sx={{ "&:hover": { backgroundColor: "#201d24" } }}
                                className="!flex !gap-4 !items-center !w-full  !justify-start "
                            >
                                <div className="w-[24px] h-[24px]">
                                    <CameraIconSVG />
                                </div>
                                <p className="text-[1.4rem] fa-format-400 text-white w-[45px] flex justify-start">
                                    {item.title}
                                </p>
                                {(item.title === selectedQuality?.title) &&
                                    <div className="mr-[21px]">
                                        <SettingGreenThickSVG />
                                    </div>}
                            </Button>))}
                    </div>
                }
                open={openQuality}
                toggleDrawer={toggleQualityDrawer}
            />
        </div>
    );
};
