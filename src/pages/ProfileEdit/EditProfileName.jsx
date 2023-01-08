import React from 'react';
import { ToolBar } from "../../components/ToolBar/ToolBar";
import { CustomButton } from "../../components/customButton/CustomButton";
import BackgroundBlurSVG from '../../components/common/assets/BackgroundBlurSVG';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editUserName } from '../../service/ApiClient';
import { useFormik } from 'formik';
import { EDIT_PROFILE_VALIDATION_SCHEMA } from '../../constant/Validation';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../redux/login/LoginSlice';
import { useNavigate } from 'react-router-dom';

function EditProfileName(props) {
    const userData = useSelector(selectUserData)
    const navigate=useNavigate()
    const updateUserNameMutation=useMutation((fullName)=>editUserName(fullName),{
        onSuccess:(res)=>{
            navigate(-2)
        }
    })
    const formik=useFormik({
        initialValues:{
            full_name :userData?.full_name!=null?userData?.full_name:""
            
        },
        enableReinitialize:true,
        validationSchema:EDIT_PROFILE_VALIDATION_SCHEMA,
        onSubmit:(data)=>{
            updateUserNameMutation.mutate(data.full_name)
        }
    })
    return (
        <div className=" w-full h-full bg-[#0F0817] overflow-scroll pb-11 " dir="rtl">
            <div className="w-full h-full container max-w-[640px] mx-auto ">
                <div className="fixed top-[-27%] left-[50%] translate-x-[-50%] z-10">
                    <BackgroundBlurSVG />
                </div>
                <ToolBar title="ویرایش نام" />

                <div className="w-full px-9  flex flex-col h-full  ">

                    <div className="flex flex-col gap-10 items-start justify-center mt-[74px]  z-20">
                        <div className="w-full ">
                            <p className="text-[1.6rem] fa-format-400 px-1 text-gray-A mb-2">نام</p>
                            <form className="flex flex-col justify-center items-center">
                                <div
                                    className="w-full  rounded-[15px] mt-1 mb-12 flex h-[48px] flex-row justify-center py-3  items-center">
                                    <input dir='rtl'
                                    name='full_name'
                                        className='bg-black-box w-full rounded-[15px] h-[48px] focus:outline-none px-4 text-[1.6rem] text-white fa-format-300' 
                                        value={formik.values.full_name}
                                        onChange={formik.handleChange}
                                        />
                                </div>
                                <CustomButton
                                onClick={()=>formik.handleSubmit()}
                                >
                                    ذخیره
                                </CustomButton>
                            </form>

                        </div>

                    </div>


                </div>
            </div>

        </div>
    );
}

export default EditProfileName;
