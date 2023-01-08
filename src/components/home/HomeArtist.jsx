import React from 'react'
import VideoCardItem from '../common/VideoCardItem'
import cartImage from "../../assets/images/home-item.png";
import HomeMorItemChevronSVG from './assets/HomeMorItemChevronSVG';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ArtistCardItem from '../common/ArtistCardItem';
import HomeChildMetaData from './HomeChildMetaData';

function HomeArtist({items, metaData}) {
    return (
        <>
            <HomeChildMetaData metaData={metaData}/>
            <Swiper
                className="!w-full mt-5"
                spaceBetween={10}
                slidesPerView={2.8}
                initialSlide={items?.length-1}
                breakpoints={
                    {
                        360: {
                            slidesPerView: 3.2,
                        }, 400: {
                            slidesPerView: 3.7,
                        },
                    }
                }
                dir="ltr"
                cssMode={true}
            >
                <div className='w-full grid grid-cols-2  m-auto  gap-x-6  gap-y-4 mt-6  '>
                    {items?.map((item, index) =>

                        <SwiperSlide className='  first:!ml-[20px] last:!mr-[17px] first:!pl-[10px] '>
                            <div>
                                <ArtistCardItem item={item}
                                />
                            </div>
                        </SwiperSlide>
                    )}
                </div>
            </Swiper>
        </>
    )
}

export default HomeArtist
