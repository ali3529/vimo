import { Button } from "@mui/material";
import * as React from "react";
import SwipeBottomSheet from "../../components/bottomSheet/SwipeBottomSheet";
import BackgroundBlurSVG from "../../components/common/assets/BackgroundBlurSVG";
import ChangePhoto from "../../components/profileEdit/assets/ChangePhoto";
import ChoosePhoto from "../../components/profileEdit/assets/ChoosePhoto";
import DeletePhoto from "../../components/profileEdit/assets/DeletePhoto";
import TakePhoto from "../../components/profileEdit/assets/TakePhoto";
import { ToolBar } from "../../components/ToolBar/ToolBar";
import ProfileEditPencilSVG from "../../components/setting/assets/EditProfilePencilSVG";
import ProfileEditCameraSVG from "../../components/setting/assets/ProfileEditCameraSVG";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectInitialData } from "../../redux/initialize/InitializeSlice";
import { useEffect } from "react";
import { selectUserData } from "../../redux/login/LoginSlice";


export const ProfileEdit = () => {
    const [OpenEditProfile, setOpenEditProfile] = React.useState(false);
    const userData = useSelector(selectUserData)
    const navigate=useNavigate()
    const toggleEditProfile = (newOpen) => () => {
        setOpenEditProfile(newOpen);
    };
    const handleOpenEditProfile = () => {
        setOpenEditProfile(true);
    };

    useEffect(() => {
    }, [userData])
    
    return (
        <div className="w-full h-full relative bg-[#0F0817] overflow-scroll pb-11" dir="rtl">
            <div className="w-full h-full container reltive max-w-[480px] mx-auto">
                <div className="fixed top-[-27%] left-[50%] translate-x-[-50%] z-10">
                    <BackgroundBlurSVG />
                </div>
                <ToolBar title="ویرایش پروفایل" />
                <div className="w-[88%] mx-auto  flex flex-col h-full">
                   
                    <div className="flex flex-col gap-10 items-start justify-center mt-36 z-20">
                        <div className="w-full">
                            <p className="text-[1.6rem] fa-format-400 px-1 text-gray-A mb-2">نام</p>\
                            <Link to={"/profile/edit-profile-name"}>
                            <Button
                                className="!bg-black-box !px-8 !h-[48px] !rounded-[15px] !w-full !flex !items-center !justify-between"
                            >
                                <div className='flex items-center gap-4'>
                                    <p className="text-[1.6rem] text-white fa-format-300">
                                        {userData?.full_name}
                                    </p>
                                </div>
                                <ProfileEditPencilSVG />
                            </Button>

                            </Link>
                          
                        </div>
                        <div className="w-full">
                            <p className="px-1 text-[1.6rem] fa-format-300 text-gray-A mb-2">
                                شماره موبایل
                            </p>
                            <Button
                                className="!bg-black-box !px-8 !h-[48px] !rounded-[15px] !w-full !flex !items-center !justify-between !gap-8"
                                onClick={()=>navigate("/profile/edit-phone-number",{state:{phone:userData?.phone}})}
                            >
                                <p className="text-[1.6rem] text-white fa-format-300 fa-num ss03">
                                  {userData?.phone}
                                </p>
                                <ProfileEditPencilSVG />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <SwipeBottomSheet
                Content={
                    <div dir='rtl' className='flex flex-col pb-6'>
                        <Button
                            sx={{ "&:hover": { backgroundColor: "#201d24" } }}
                            className="flex !gap-6 !items-center !justify-start"
                        >
                            <ChoosePhoto />
                            <div className='text-white fa-format-300 text-[1.4rem]'>انتخاب عکس از گالری</div>
                        </Button>
                        <Button
                            sx={{ "&:hover": { backgroundColor: "#201d24" } }}
                            className='!flex !gap-6 !items-center !justify-start'>
                            <ChangePhoto />
                            <div className='text-white fa-format-300 text-[1.4rem]'>تعویض عکس</div>
                        </Button>
                        <Button
                            sx={{ "&:hover": { backgroundColor: "#201d24" } }}
                            className='!flex !gap-6 !items-center !justify-start'
                        >
                            <TakePhoto />
                            <div className='text-white fa-format-300 text-[1.4rem]'>عکس گرفتن</div>
                        </Button>
                        <Button
                            sx={{ "&:hover": { backgroundColor: "#201d24" } }}
                            className='!flex !gap-6 !items-center !justify-start'
                        >
                            <DeletePhoto />
                            <div className='fa-format-500 text-[#EB5757] text-[1.4rem]'>حذف عکس
                                فعلی
                            </div>
                        </Button>
                    </div>
                }
                open={OpenEditProfile}
                toggleDrawer={toggleEditProfile}
            />
        </div>
    );
};
