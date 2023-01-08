import {Button} from '@mui/material'
import React, {useState} from 'react'
import ChevronDownSVG from '../../../components/common/assets/ChevronDownSVG'
import UserIconSVG from '../../../components/common/assets/UserIconSvg'
import TicketSubCategoryPlusButtonSVG from '../../../components/support/assets/TicketSubCategoryPlusButtonSVG'
import {ToolBar} from '../../../components/ToolBar/ToolBar'
import SwipeBottomSheet from "../../../components/bottomSheet/SwipeBottomSheet";
import BottomSheetHeader from "../../../components/bottomSheet/BottomSheetHeader";
import FaqBottomSheet from "../../../components/support/bottomSheet/FaqBottomSheet";
import {useLocation, useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
import {useRef} from 'react'
import SelectCategoryBottomSheetContainer
    from '../../../components/support/bottomSheet/SelectCategoryBottomSheetContainer'
import {useSelector} from 'react-redux'
import {selectCategory} from '../../../redux/ticket/SelectedTicketSlice'

function TicketSubCategory() {
    const [openFaqBottomSheet, setOpenFaqBottomSheet] = useState(false);
    const [category, setCategory] = useState({})
    const location = useLocation()
    const categorySelector = useSelector(selectCategory)
    const navigation = useNavigate()
    const BottomSheetContentRef = useRef()
    const selectCategoryBottomSheetRef = useRef()
    const toggleFaqDrawer = (newOpen) => () => {
        setOpenFaqBottomSheet(newOpen);
    };
    const handleOpenBottomSheet = () => {
        setOpenFaqBottomSheet((prevState) => {
            return !prevState;
        });
    };

    useEffect(() => {
        if (categorySelector?.direct_ticket) {
//handle back in direct ticket when choose not direct ticket in bottom navigation
            if (localStorage.getItem("direct_ticket")) {
                navigation("/support/create-ticket")
                localStorage.removeItem("direct_ticket")
            } else {

                navigation(-1)
            }
        }
        setCategory(categorySelector)
    }, [categorySelector])

    // open bottom sheet if question have answer
    const handleOpenSubCategory = (subCategory) => {
        if (subCategory?.answer) {
            BottomSheetContentRef.current.setData(subCategory)
            setOpenFaqBottomSheet(true)
        } else {
            navigation("/support/create-ticket", {state: {item: subCategory}})
        }
    }

    const handleChangeCategory = () => {
        selectCategoryBottomSheetRef.current.setOpen(category)
    }

    return (
        <div dir="rtl" className="w-full h-full relative bg-support-background ">
            <div className='w-full h-full max-w-[480px] container mx-auto  overflow-scroll'>
                <ToolBar title="ثبت تیکت" style={""}/>
                <div>
                    <div className='text-gray-A mt-4 w-[88%] mx-auto text-[1.6rem] fa-format-300 pt-28'>
                        دسته بندی
                    </div>
                    <Button
                        className='!bg-blue !w-[88%] !mx-auto !h-[56px] !flex !items-center !justify-between !rounded-[15px] !mt-2 !px-8'
                        onClick={handleChangeCategory}
                    >
                        <div className='flex items-center justify-between gap-5'>
                            <img className='w-[30px] h-[30px]' src={category?.enable_icon}/>
                            <p className='text-[1.4rem] text-white fa-format-300'>
                                {category?.title}
                            </p>
                        </div>
                        <ChevronDownSVG/>
                    </Button>
                    <div
                        className='mt-6 mb-[90px] bg-black-box w-[88%] mx-auto flex flex-col gap-4 rounded-[20px] p-[14px] z-30'>
                        <p className="text-[1.4rem] mb-2 text-gray-A fa-format-300 mt-[14px] ">
                            عنوان تیکت خود را انتخاب کنید
                        </p>

                        {
                            category?.faqs?.map(item =>
                                item?.is_other ?
                                    <Button
                                        className="!w-[110px] !h-[44px] !rounded-[33px] !flex !gap-2 !items-center !bg-blue !mt-6 !mb-4"
                                        onClick={() => handleOpenSubCategory(item)}
                                    >
                                        <TicketSubCategoryPlusButtonSVG/>
                                        <p className='text-white text-[1.6rem] fa-format-200 '>
                                            دیگر
                                        </p>
                                    </Button>
                                    :
                                    <Button
                                        variant='outlined'
                                        className='!py-4 !pr-4 !pl-7 !border-[1px] !rounded-[15px] !border-blue !flex !justify-start'
                                        onClick={() => handleOpenSubCategory(item)}
                                    >
                                        <p className='text-white text-[1.2rem] fa-format-300 text-right'>
                                            {item?.question}
                                        </p>
                                    </Button>
                            )
                        }
                    </div>
                </div>
            </div>
            <SwipeBottomSheet
                Header={<BottomSheetHeader title=" پرسش"/>}
                Content={<FaqBottomSheet ref={BottomSheetContentRef} onCloseBottomSheet={handleOpenBottomSheet}/>}
                open={openFaqBottomSheet}
                toggleDrawer={toggleFaqDrawer}
            />
            <SelectCategoryBottomSheetContainer ref={selectCategoryBottomSheetRef}/>
        </div>

    );
}

export default TicketSubCategory;
