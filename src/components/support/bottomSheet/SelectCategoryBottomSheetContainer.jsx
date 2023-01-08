import React, {useEffect, useImperativeHandle, useState} from 'react'
import BottomSheetHeader from '../../bottomSheet/BottomSheetHeader';
import SwipeBottomSheet from '../../bottomSheet/SwipeBottomSheet';
import SelectCategoryBottomSheet from './SelectCategoryBottomSheet'

function SelectCategoryBottomSheetContainer({}, ref) {
    const [openSelectCategory, setOpenSelectCategory] = useState(false)
    const [category, setCategory] = useState({})

    useImperativeHandle(ref, () => ({
        setOpen(category) {
            setOpenSelectCategory(true)
            setCategory(category)
        },
    }));

    const toggleSelectCategoryDrawer = (newOpen) => () => {
        setOpenSelectCategory(newOpen);
    };

    useEffect(() => {

    }, [category])

    return (
        <>
            <SwipeBottomSheet
                Header={<BottomSheetHeader title=" دسته بندی"/>}
                Content={<SelectCategoryBottomSheet category={category} setOpenSelectCategory={setOpenSelectCategory}/>}
                open={openSelectCategory}
                toggleDrawer={toggleSelectCategoryDrawer}
            />
        </>
    )
}

export default React.forwardRef(SelectCategoryBottomSheetContainer)