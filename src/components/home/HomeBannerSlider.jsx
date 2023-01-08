import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay} from "swiper";
import SliderPlaceHolderSvg from './assets/SliderPlaceHolderSvg';
import useWindowDimensions from '../../utils/helper/ScreenSize';
import {ConvertImageRatio} from '../../utils/helper/ImageResizeFormat';

function HomeBannerSlider({items}) {
    const {height, width} = useWindowDimensions();

    return (
        <div className="rounded-[15px] relative flex flex-row justify-center items-center w-full mt-[24px]  ">
            <Swiper
                className="!w-full mt-4  "
                spaceBetween={10}
                slidesPerView={1}
                initialSlide={3}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    reverseDirection: true,
                    pauseOnMouseEnter: true
                }}
                loop={"true"}
                dir="ltr"
                modules={[Autoplay]}
                cssMode={"true"}
            >
                {items?.banners.map(item =>
                    <SwiperSlide className='relative   '>
                        <img
                            className={` max-w-full   max-h-[330px] object-cover ${items?.has_placeholder ? "rounded-[15px]" : "rounded-[0px]"}  !w-[90%] absolute`}
                            src={item?.image}
                            style={{height: ConvertImageRatio(width, items?.height_relation)}}
                        />

                        <div className={`!w-[90%] mx-auto`}
                             style={{height: ConvertImageRatio(width, items?.height_relation)}}>
                            {items?.has_placeholder &&
                                <SliderPlaceHolderSvg height={ConvertImageRatio(width, items?.height_relation)}/>
                            }
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export default HomeBannerSlider