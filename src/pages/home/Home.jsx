import * as React from "react";
import HomeBg from "../../components/home/assets/HomeBg";
import HomeSectionOne from "../../components/home/HomeSectionOne";
import HomeSectionTwo from "../../components/home/HomeSectionTwo";
import HomeSectionThree from "../../components/home/HomeSectionThree";
import {Skeleton} from "@mui/material";
import HomeShimmerSectionOne from "../../components/home/HomeShimmerSectionOne";
import HomeShimmerSectionTwo from "../../components/home/HomeShimmerSectionTwo";
import {useEffect} from "react";
import HomeBannerSlider from "../../components/home/HomeBannerSlider";
import VimoLogo from "../../components/home/assets/VimoLogo";
import HomeArtist from "../../components/home/HomeArtist";
import {useQuery} from "@tanstack/react-query";
import {getHome} from "../../service/ApiClient";
import {useState} from "react";
import HomeSectionContainer from "../../components/home/HomeSectionContainer";
import {VIEW_TYPE} from "../../constant/HomeViewType";
import HomeShimmer from "../../components/home/HomeShimmer";

export const Home = () => {

    const [home, setHome] = useState([])
    const getHomeQuery = useQuery(["getHomeQuery"], () => getHome(), {
        onSuccess: (res) => {
            setHome(res?.data?.result?.home)
        }
    })

    useEffect(() => {
      setHome(getHomeQuery?.data?.data?.result?.home)
    }, [])
    
    //render View match whit viewType
    const handleRenderView = (viewType, item) => {
        if (viewType == VIEW_TYPE.BANNER) {
            return <>
                <HomeBannerSlider items={item?.data?.banner_group}/>
            </>
        } else if (viewType == VIEW_TYPE.HORIZONTAL_VIDEOS) {
            return <div className="w-full">
                <HomeSectionTwo metaData={item?.child_meta_data} items={item?.data?.videos}/>
            </div>
        } else if (viewType == VIEW_TYPE.ARTISTS) {
            return <div className="w-full">
                <HomeArtist metaData={item?.child_meta_data} items={item?.data?.artists}/>
            </div>
        } else if (viewType == VIEW_TYPE.VERTICAL_VIDEOS) {
            return <div className="px-8 first:w-full">
                <HomeSectionOne metaData={item?.child_meta_data} items={item?.data?.videos}/>
            </div>
        }
    }
    
    return (
        <div className="relative flex  flex-col  h-full bg-black-BG transition-all duration-700 ease-linear ">
            <div className=" absolute  top-0  h-full w-full z-10 ">
                <HomeBg/>
            </div>
            {
                <div
                    className="w-full h-full pb-20 flex flex-col overflow-scroll justify-start items-center max-w-[480px] mx-auto  z-20">
                    <div className="flex flex-row justify-center items-center w-full mt-[16px] z-20">
                        <VimoLogo/>
                    </div>
                    {
                        getHomeQuery.isLoading ?
                            <HomeShimmer/>
                            : <>
                                {
                                    Object.assign(home).map(item =>
                                        <>
                                            <div className="w-full mt-[32px] flex flex-col justify-start items-center ">
                                                <div className=" w-full">
                                                    <HomeSectionContainer metaData={item?.parent_meta_data}>
                                                        {
                                                            item?.items.map(childItem =>
                                                                handleRenderView(childItem?.view_type, childItem)
                                                            )
                                                        }
                                                    </HomeSectionContainer>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                            </>
                    }
                </div>
            }
        </div>
    );
};
