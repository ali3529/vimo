import {Card, CardActionArea, Skeleton} from "@mui/material";
import {useQuery} from "@tanstack/react-query";
import * as React from "react";
import {useNavigate} from "react-router-dom";
import AboutUsBorderSVG from "../../components/aboutus/assets/AboutUsBorderSVG";
import AboutUsItemChevron from "../../components/aboutus/assets/AboutUsItemChevron";
import AboutUSLogoSVG from "../../components/aboutus/assets/AboutUSLogoSVG";
import BackgroundBlurSVG from "../../components/common/assets/BackgroundBlurSVG";
import {ToolBar} from "../../components/ToolBar/ToolBar";
import {getAboutUs} from "../../service/ApiClient";
import {useState} from "react";
import {useEffect} from "react";
import ProfileSkeleton from "../../components/profile/ProfileSkeleton";

export const AboutUs = () => {
    const [aboutUsData, setAboutUsData] = React.useState([])
    const navigate = useNavigate()

    const getAboutUsQuery = useQuery(["getAboutUsQuery"], () => getAboutUs(), {
        onSuccess: (res) => {
            setAboutUsData(res?.data?.result?.about_us)
        }, refetchOnWindowFocus: false
    })
    useEffect(() => {
        setAboutUsData(getAboutUsQuery?.data?.data?.result?.about_us)
    }, [])
    console.log(aboutUsData)
    const handleClickItem = (item) => {
        navigate("/about-us/item", {state: {item}})
    }

    return (
        <div dir="rtl" className="w-full h-full flex flex-col">
            <div className="fixed top-[-27%] left-[50%] translate-x-[-50%] z-10">
                <BackgroundBlurSVG/>
            </div>
            <div className="w-full h-full relative flex flex-col bg-support-background max-w-[480px] mx-auto">
                <ToolBar title="درباره ما"/>
                <div className=" w-full flex overflow-scroll flex-col pb-6 bg-support-background mt-[15%]">
                    <div className="w-full h-full justify-start items-start flex flex-col mt-[25px] sm:mt-[35px] px-[22px] z-10">
                        <div className="w-full flex relative flex-col justify-center items-center   rounded-[15px]">
                            <div className="absolute w-full">
                                <AboutUsBorderSVG/>
                            </div>
                            <div className="mt-[20px]">
                                <AboutUSLogoSVG/>
                            </div>
                            <p className="fa-format-400 text-[1.6rem] text-white mt-[15px]">
                                ویمو، مرجع پخش و دانلود فیلم
                            </p>
                            <p className="fa-format-300 text-[1.2rem] text-gray-A my-[15px]">
                                {/* ۱.۰.۶ */}
                            </p>
                        </div>
                        <div className="w-full mt-[11%] flex flex-col gap-3 pb-20">
                            {getAboutUsQuery.isLoading ?
                                <>
                                    <ProfileSkeleton width={"100%"} height={53}/>
                                    <ProfileSkeleton width={"100%"} height={53}/>
                                    <ProfileSkeleton width={"100%"} height={53}/>
                                </>
                                :
                                <>
                                    {aboutUsData?.map((item) => (
                                        <Card
                                            onClick={(e) => handleClickItem(item)}
                                            className={`!w-full !bg-black-box !flex !flex-row justify-between items-center !rounded-[15px] `}
                                        >
                                            <CardActionArea
                                                className={`!w-full !bg-black-box !flex !flex-row justify-between items-center !rounded-[15px] !p-[16px]`}
                                            >
                                                <div
                                                    className="w-full bg-black-box flex flex-row justify-between items-center ">
                                                    <p className="fa-format-400 text-[1.4rem] text-white ">
                                                        {item.title}
                                                    </p>
                                                    <AboutUsItemChevron/>
                                                </div>
                                            </CardActionArea>
                                        </Card>
                                    ))}
                                </>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
