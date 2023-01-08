import {Button, Dialog, DialogContent} from '@mui/material'
import React, {useImperativeHandle, useState} from 'react'
import {useDispatch} from 'react-redux'
import {logout} from '../../redux/login/LoginSlice'
import PaymentCrownSVG from '../payment/assets/PaymentCrownSVG'

function ConfirmLogOutDialog({}, ref) {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()

    useImperativeHandle(ref, () => ({
        openDialog() {
            setOpen(true)
        }
    }));
    const handleLogout = () => {
        dispatch(logout())
        localStorage.clear()
        setOpen(false)
    }
    return (
        <Dialog
            sx={{
                "& .MuiPaper-root": {
                    backgroundColor: "#28242D !important",
                    borderRadius: "30px !important"
                }
            }}
            className='!rounded-[20px]'
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent
                className='!bg-black-box  !flex !flex-col !items-center !justify-center !py-24 !rounded-[20px]'
            >
                <p className='!text-white text-[2rem] fa-format-500 mt-6'>خروج از حساب کاربری</p>
                <div className='w-full h-[1px] bg-gray-B mt-[24px]'></div>
                <p className='text-white w-full text-[1.4rem] fa-format-400 mt-[24px]'>
                    آیا میخواهید از حساب کاربری خود خارج شوید؟
                </p>
                <div className='w-full flex flex-row justify-center items-center gap-3 mt-[30px]'>
                    <Button variant='outlined'
                            className='!bg-transparent z-10 !border !border-gray-A  !w-[148px] !h-[48px] !mt-8 !rounded-[30px]'
                            onClick={() => setOpen(false)}
                    >
                        <p className='!text-white text-[1.6rem] fa-format-300'>انصراف</p>
                    </Button>
                    <Button className='!bg-[#EB5757] !w-[148px] !h-[48px] !mt-8 !rounded-[30px]'
                            onClick={() => handleLogout()}
                    >
                        <p className='!text-white text-[1.6rem] fa-format-300'>خروج</p>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default React.forwardRef(ConfirmLogOutDialog)