import React, {useEffect, useState} from 'react'
import BottomSheetHeader from '../../components/bottomSheet/BottomSheetHeader'
import SwipeBottomSheet from '../../components/bottomSheet/SwipeBottomSheet'
import SandGlassSVG from '../../components/common/assets/SandGlassSVG'
import PaymentChevronLeftSVG from '../../components/payment/assets/PaymentChevronLeftSVG'
import PaymentMaskedBackgroundSVG from '../../components/payment/assets/PaymentMaskedBackgroundSVG'
import {ToolBar} from '../../components/ToolBar/ToolBar'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import PaymentCrownSVG from '../../components/payment/assets/PaymentCrownSVG'
import {useLocation} from 'react-router-dom'
import {useMutation} from '@tanstack/react-query'
import {applyCoupon, createInvoice} from '../../service/ApiClient'
import {CustomButton} from '../../components/customButton/CustomButton'

function Payment() {
    const [openDiscountCode, setOpenDiscountCode] = React.useState(false);
    const [discountCode, setDiscountCode] = useState('')
    const [openSuccessfulPayment, setOpenSuccessfulPayment] = React.useState(false);
    const [plan, setPlan] = useState({})
    const [error, setError] = useState()
    const [validCouponMessage, setValidCouponMessage] = useState("")
    const location = useLocation()

    const toggleDiscountDrawer = (newOpen) => () => {
        setOpenDiscountCode(newOpen);
    };
    const handleOpenDiscountBottomSheet = () => {
        setOpenDiscountCode(!openDiscountCode);
    };
    // filling selected plan state by data we receive from plans page
    useEffect(() => {
        setPlan(location?.state)
        console.log(plan)
    }, [location?.state])
    // onchange for coupon input
    const handleDisCountCode = (e) => {
        setDiscountCode(e.target.value)
    }
// make request when user click the buy button
    const createPaymentMutation = useMutation((planData) => createInvoice(planData), {
        onSuccess: (res) => {
            window.location = res?.data?.result?.url
        }
    })
//make request when user have coupon and enter it
    const applyDiscountMutation = useMutation((couponData) => applyCoupon(couponData), {
        onSuccess: (res) => {
            if (res?.data?.done) {
                setValidCouponMessage(res?.data?.result?.valid_coupon_message)
            }
            setOpenDiscountCode(false)
            setDiscountCode("")
            setError(res?.data?.error?.message);
        }

    })
    // onClick handling for buying plan
    const handleBuyingPlan = () => {
        createPaymentMutation.mutate({plan_id: plan?.id, coupon_code: discountCode})
    };
    // onClick handling for entering discount
    const handleApplyCoupon = () => {
        applyDiscountMutation.mutate({plan_id: plan?.id, coupon_code: discountCode})
    }
    const handleCloseSuccessFullPaymentDialog = () => {
        setOpenSuccessfulPayment(false);
    };

    return (
        <div dir='rtl' className='w-full h-full bg-black-BG'>
            <div className='w-full h-full bg-black-BG max-w-[480px] mx-auto relative overflow-scroll container'>
                <div className="fixed top-[-16%] left-[50%] translate-x-[-50%] z-10">
                    <PaymentMaskedBackgroundSVG/>
                </div>
                <ToolBar
                    style={"!backdrop-blur-none"}
                    chevronColor={"white"}
                    ContainerStyle={"!backdrop-blur-none"}
                />
                <div
                    style={{backgroundColor: plan?.invoice_background_color}}
                    className=' w-[90%]  mx-auto flex flex-col items-center rounded-[20px] mt-[65px] pb-[32px] z-20 relative'
                >
                    <p
                        style={{color: plan?.invoice_title_color}}
                        className='text-[2rem] fa-format-500 mt-[32px] '
                    >
                        {plan?.invoice_title_text}
                    </p>
                    <div className='flex items-center mt-[11px]'>
                        <p
                            style={{color: plan?.invoice_subtitle_text_color}}
                            className='text-[1.4rem] fa-format-400 mt-[2px]'
                        >
                            {plan?.invoice_subtitle_text}
                        </p>
                    </div>
                    <div
                        style={{backgroundColor: plan?.invoice_separator_color}}
                        className='h-[1px] bg-gray-B w-[86%] mx-auto mt-[24px]'
                    >
                    </div>
                    <p
                        style={{color: plan?.invoice_every_month_color}}
                        className='text-[1.6rem] fa-format-400 mt-[16px] w-[72%] px-16'
                    >
                        {plan?.invoice_every_month_text}
                    </p>
                    <div className='flex items-center justify-between mt-[12px] w-[72%] px-16'>
                        {plan?.invoice_every_month_price_text &&
                            <p style={{color: plan?.invoice_every_month_price_color}}
                               className='text-[1.4rem] fa-format-400  oldPrice-lineThrough fa-num '>
                                {plan?.invoice_every_month_price_text} <span
                                className='fa-format-200'> {plan?.price_unit} </span>
                            </p>
                        }
                        {plan?.invoice_every_month_price_text &&
                            <div className='mr-3'>
                                <PaymentChevronLeftSVG/>
                            </div>
                        }
                        {!plan?.invoice_every_month_price_text ?
                            <p style={{color: plan?.invoice_every_month_new_price_color}}
                               className=' fa-format-500 w-full flex items-center justify-center'>
                                <span
                                    className='text-[2.4rem] ml-2 fa-num'>{plan?.invoice_every_month_new_price_text}</span>
                                <span className='text-[1.8rem]'>
                                    {plan?.price_unit}
                                </span>
                            </p>
                            :
                            <p style={{color: plan?.invoice_every_month_new_price_color}} className=' fa-format-500 '>
                                <span
                                    className='text-[2.4rem] ml-2 fa-num'>{plan?.invoice_every_month_new_price_text}</span>
                                <span className='text-[1.8rem]'>
                                    {plan?.price_unit}
                                </span>
                            </p>
                        }
                    </div>
                    <div
                        className='!w-full flex flex-col !h-[175px] justify-center items-center mt-[14px] bg-payment-box-background bg-no-repeat mx-auto bg-center'
                    >
                        <div className='flex mt-1 mb-4'>
                            <p
                                style={{color: plan?.invoice_final_box_title_color}}
                                className='fa-format-400 text-[1.4rem]'
                            >
                                {plan?.invoice_final_box_title_text}
                            </p>
                            <p
                                style={{color: plan?.invoice_final_box_title_addon_color}}
                                className=' fa-num text-[1.4rem] fa-format-400  mr-[6px]'
                            >
                                {plan?.invoice_final_box_title_addon_text}
                            </p>
                        </div>
                        {
                            plan?.invoice_final_box_old_price_text &&
                            <div
                                style={{color: plan?.invoice_final_box_old_price_color}}
                                className='fa-format-400 oldPrice-lineThrough-gray text-[1.6rem] fa-num'
                            >
                                {plan?.invoice_final_box_old_price_text}
                                <span className='fa-format-200'> {plan?.price_unit} </span>
                            </div>
                        }
                        <p
                            style={{color: plan?.invoice_final_box_new_price_color}}
                            className=' fa-format-500 text-[2rem] mt-4'
                        >
                            <span className='text-[3rem] ml-3 fa-num'>{plan?.invoice_final_box_new_price_text}</span>
                            {plan?.price_unit}
                        </p>
                    </div>
                </div>
                {/* //if the coupon is true we will not show enter code */}
                {validCouponMessage ?
                    <div
                        className='!text-green text-[1.4rem] fa-format-500 flex items-center justify-center bg-[rgba(33,150,83,0.3)] rounded-[30px] h-[40px] mx-10 mt-5'
                    >
                        <p className='!text-green'>{validCouponMessage}</p>
                    </div>
                    :
                    <div className='flex items-center mt-5 px-10'>
                        <span className='text-[1.4rem] fa-format-300 text-gray-A ml-[6px]'>کد تخفیف دارید؟</span>
                        <span
                            onClick={handleOpenDiscountBottomSheet}
                            className='text-yellow text-[1.4rem] fa-format-300'
                        >
                            وارد کنید
                        </span>
                    </div>
                }
                {/* //showing error when coupon is wrong */}
                {error &&
                    <div
                        className='!text-red text-[1.4rem] fa-format-500 flex items-center justify-center bg-[#544040] rounded-[30px] h-[40px] mx-10 mt-5'
                    >
                        <p className='!text-red'>{error}</p>
                    </div>
                }
                <div
                    className='flex items-center justify-center mt-10'
                    onClick={handleBuyingPlan}
                >
                    <CustomButton
                        Loading={createPaymentMutation.isLoading}
                        style={{
                            backgroundColor: plan?.invoice_final_box_button_background_color,
                            color: plan?.invoice_final_box_button_text_color
                        }}
                        className='mt-10  text-[1.6rem]  w-[148px] h-[48px] rounded-[30px] fa-format-300 flex items-center justify-center'
                    >
                        {plan?.invoice_final_box_button_text}
                    </CustomButton>
                </div>
            </div>
            <SwipeBottomSheet
                Header={<BottomSheetHeader title=" کد تخفیف"/>}
                Content={
                    <div dir='rtl' className='flex flex-col  '>
                        <p className='text-gray-A text-[1.4rem] fa-format-300 mr-3'> کد تخفیف را وارد کنید</p>
                        <input
                            value={discountCode}
                            onChange={handleDisCountCode}
                            className='!bg-[rgba(94,70,248,0.1)] w-[100%] mx-auto h-[48px] !border-[1px] !border-blue px-6 rounded-[30px] text-gray-A mt-2 text-[1.4rem] placeholder:text-gray-B focus:outline-0'
                            placeholder='مثال: 6D482KJ'
                        />
                        <div className='flex items-center justify-center mt-6'>
                            <CustomButton
                                Loading={applyDiscountMutation.isLoading}
                                onClick={handleApplyCoupon}
                                className='text-white bg-blue w-[148px] h-[48px] flex items-center justify-center rounded-[30px] mt-3 fa-format-300 text-[1.6rem]'
                            >
                                اعمال
                            </CustomButton>
                        </div>
                    </div>
                }
                open={openDiscountCode}
                toggleDrawer={toggleDiscountDrawer}
            />
            <Dialog
                sx={{
                    "& .MuiPaper-root": {
                        backgroundColor: "#28242D !important",
                        borderRadius: "30px !important"
                    }
                }}
                className='!rounded-[20px]'
                open={openSuccessfulPayment}
                onClose={handleCloseSuccessFullPaymentDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent
                    className='!bg-black-box !w-[310px] !flex !flex-col !items-center !justify-center !py-24 !rounded-[20px]'
                >
                    <PaymentCrownSVG/>
                    <p className='!text-white text-[2rem] fa-format-500 mt-6'>خرید شما با موفقیت انجام شد</p>
                    <p className='text-[#BBB8C2] text-[1.4rem] fa-format-200 mt-2'>
                        خرید بسته ۱ ساله برای شما فعال شد
                    </p>
                    <Button className='!bg-blue !w-[148px] !h-[48px] !mt-8 !rounded-[30px]'>
                        <p className='!text-white text-[1.6rem] fa-format-300'>تایید</p>
                    </Button>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Payment