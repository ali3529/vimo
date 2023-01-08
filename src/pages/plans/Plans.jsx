import { Button } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { Skeleton } from '@mui/material'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import BackgroundBlurSVG from '../../components/common/assets/BackgroundBlurSVG'
import SandGlassSVG from '../../components/common/assets/SandGlassSVG'
import PlanBlackBackgroundSVG from '../../components/plans/assets/PlanBlackBackgroundSVG'
import PlanGreenTickSVG from '../../components/plans/assets/PlanGreenTickSVG'
import PlanNumberOneSVJ from '../../components/plans/assets/PlanNumberOneSVJ'
import PlanUpperChevronSVG from '../../components/plans/assets/PlanUpperChevronSVG'
import { ToolBar } from '../../components/ToolBar/ToolBar'
import { getPlans } from '../../service/ApiClient'
import ProfileSkeleton from '../../components/profile/ProfileSkeleton'

function Plans() {
    const [expand, setExapnd] = useState(true)
    const [plans, setPlans] = useState([])
    const navigate = useNavigate();
    const openMoreItems = () => {
        setExapnd(!expand)
    }
    const getPlansQuery = useQuery(["getPlansQuery"], () => getPlans(), {
        onSuccess: (res) => {
            setPlans(res?.data?.result?.plans)
        },
        refetchOnWindowFocus: false
    })
    useEffect(() => {
        setPlans(getPlansQuery?.data?.data?.result?.plans);
    }, []);

    const handlePlanClick = (item) => {
        console.log(item)
        navigate("/payment", { state: item })
    }
    return (
        <div dir="rtl" className='w-full h-full overflow-scroll bg-black-BG'>
            <div className="fixed top-[-27%] left-[50%] translate-x-[-50%] z-10 overflow-scroll ">
                <BackgroundBlurSVG />
            </div>
            <div className='w-full h-full relative max-w-[480px] mx-auto bg-black-BG '>
                <ToolBar />
                <div className='mt-40 relative z-30'>
                </div>
                <div className='w-[90%] mx-auto mt-10 relative z-30 '>
                    <div
                        className={`bg-black-box relative flex flex-col px-6 rounded-[15px] transition-all overflow-hidden duration-200 ease-out ${expand ? "h-[392px]" : "h-[95px]"} `}
                    >
                        <p className='text-blue text-[2rem] fa-format-600 mt-8 flex items-center justify-center'>کاربر
                            ویژه ویمو شوید
                        </p>
                        <div className='flex flex-col gap-2 pb-10'>
                            <div className='flex items-center gap-6 mt-[16px]'>
                                <div className='w-[6px] h-[6px] rounded-full bg-blue'></div>
                                <p className='text-white text-[1.4rem] fa-format-200 '>مزایای کاربر ویژه</p>
                            </div>
                            <div className='flex items-center gap-2 '>
                                <PlanGreenTickSVG />
                                <p className='text-gray-A text-[1.2rem] min-[380px]:text-[1.4rem] fa-format-200'>
                                    بیش از
                                    ۴ سال سرویس دهی پایدار
                                </p>
                            </div>
                            <div className='flex items-center gap-2 '>
                                <PlanGreenTickSVG />
                                <p className='text-gray-A text-[1.2rem] min-[380px]:text-[1.4rem] fa-format-200'>
                                    دسترسی
                                    نامحدود به تمامی ویدیوهای
                                    خارجی و ایرانی
                                </p>
                            </div>
                            <div className='flex items-center gap-2 '>
                                <PlanGreenTickSVG />
                                <p className='text-gray-A text-[1.2rem] min-[380px]:text-[1.4rem] fa-format-200'>
                                    حذف
                                    تبلیغات بین ویدیوها
                                </p>
                            </div>
                            <div className='flex items-center gap-2 '>
                                <PlanGreenTickSVG />
                                <p className='text-gray-A text-[1.2rem] min-[380px]:text-[1.4rem] fa-format-200'>
                                    دانلود
                                    با کیفیت ۳۲۰ در حافظه
                                    موبایل شما
                                </p>
                            </div>
                            <div className='flex items-center gap-2 '>
                                <PlanGreenTickSVG />
                                <p className='text-gray-A text-[1.2rem] min-[380px]:text-[1.4rem] fa-format-200'>
                                    مشاهده
                                    متن کامل تمام ویدیوها
                                </p>
                            </div>
                            <div className='flex items-center gap-2 '>
                                <PlanGreenTickSVG />
                                <p className='text-gray-A text-[1.2rem] min-[380px]:text-[1.4rem] fa-format-200'>
                                    دسترسی
                                    نامحدود به تمامی ویدیوهای
                                    خارجی و ایرانی
                                </p>
                            </div>
                            <div className='flex items-center gap-2 '>
                                <PlanGreenTickSVG />
                                <p className='text-gray-A text-[1.2rem] min-[380px]:text-[1.4rem] fa-format-200'>
                                    حذف
                                    تبلیغات بین ویدیوها
                                </p>
                            </div>
                            <div className='flex items-center gap-2 '>
                                <PlanGreenTickSVG />
                                <p className='text-gray-A text-[1.2rem] min-[380px]:text-[1.4rem] fa-format-200'>
                                    دانلود با کیفیت ۳۲۰ در حافظه موبایل شما
                                </p>
                            </div>
                            <div className='flex items-center gap-2 '>
                                <PlanGreenTickSVG />
                                <p className='text-gray-A text-[1.2rem] min-[380px]:text-[1.4rem] fa-format-200'>
                                    بیش از
                                    ۴ سال سرویس دهی پایدار
                                </p>
                            </div>
                            <div className='flex items-center gap-2 '>
                                <PlanGreenTickSVG />
                                <p className='text-gray-A text-[1.2rem] min-[380px]:text-[1.4rem] fa-format-200'>
                                    دانلود با کیفیت ۳۲۰ در حافظه موبایل شما
                                </p>
                            </div>
                        </div>
                        <div
                            onClick={() => openMoreItems()}
                            className={`flex flex-col items-center justify-center transition-all  duration-200 ease-out cursor-pointer absolute bottom-0 right-0 left-0 z-50`}
                        >
                            <p className='text-[1.4rem] text-blue fa-format-300 transition-all duration-200'>{expand && "کمتر"}</p>
                            <div className='relative'>
                                <PlanBlackBackgroundSVG />
                                <PlanUpperChevronSVG expand={expand} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4 mt-8  '>
                        {getPlansQuery.isLoading ?
                            (
                                <>
                                    <ProfileSkeleton width={264} height={250} />
                                    <ProfileSkeleton width={264} height={250} />
                                    <ProfileSkeleton width={264} height={250} />
                                    <ProfileSkeleton width={264} height={250} />
                                </>
                            )
                            :
                            (plans?.map((item, index) => {
                                return (
                                    <div
                                        onClick={() => handlePlanClick(item)} key={index}
                                        style={{ background: item?.background_color }}
                                        className={`w-[264px] h-[250px]  rounded-[15px] flex flex-col items-center justify-center gap-4`}
                                    >
                                        <div
                                            style={{ color: item?.title_color }}
                                            className='text-[3.2rem] fa-format-500  flex items-baseline'
                                        >
                                            {item?.title_image ?
                                                <img src={item?.title_image} alt="" />
                                                :
                                                <>{item?.title_text}</>
                                            }
                                        </div>
                                        {
                                            item?.subtitle_text &&
                                            <div
                                                style={{
                                                    background: item?.subtitle_background_color,
                                                    color: item?.subtitle_text_color,
                                                    borderColor: item?.subtitle_border_color
                                                }}
                                                className=' w-[206px] h-[36px] rounded-[30px] border-[1px] text-[1.2rem] fa-format-200 flex items-center justify-center'
                                            >
                                                {item?.subtitle_text}
                                            </div>
                                        }
                                        {item?.subtitle_text ?
                                            <div className='flex items-center justify-center gap-4'>
                                                <span
                                                    style={{ color: item?.every_month_text_color }}
                                                    className=' text-[1.4rem] fa-format-200'
                                                >
                                                    {item?.every_month_text}
                                                </span>
                                                <span
                                                    style={{ color: item?.every_month_price_color }}
                                                    className=' text-[1.6rem] fa-num fa-format-200 oldPrice-lineThrough'
                                                >
                                                    {item?.every_month_price_text} {item?.price_unit}
                                                </span>
                                            </div> :
                                            <div>
                                                <span
                                                    style={{ color: item?.every_month_text_color }}
                                                    className=' text-[1.4rem] fa-format-200'
                                                >
                                                    {item?.every_month_text}
                                                </span>
                                            </div>
                                        }
                                        <div
                                            style={{ color: item?.monthly_price_text_color }}
                                            className=' text-[2rem] fa-format-300 fa-num'
                                        >
                                            {item?.monthly_price_text}
                                            <span
                                                className="text-[1.6rem] mr-2"
                                            >
                                                {item?.price_unit}
                                            </span>
                                        </div>
                                        <Button
                                            style={{ backgroundColor: item?.purchase_button_background_color }}
                                            className='!rounded-[30px]  !flex !items-center !justify-center !text-[1.6rem] !fa-format-500 !w-[143px] !h-[40px]'
                                        >
                                            <div style={{ color: item?.purchase_button_text_color }}>
                                                {item?.purchase_button_text}
                                            </div>
                                        </Button>
                                    </div>
                                )
                            }
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plans