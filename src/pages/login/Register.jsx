import {useMutation} from '@tanstack/react-query'
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
// import TriangleLoginSVG from '../../components/common/assets/TriangleLoginSvg';
import VimoIconSVG from '../../components/common/assets/VimoIconSVG';
import {CustomButton} from '../../components/customButton/CustomButton'
import {register} from '../../service/ApiClient';

function Register() {
    const [fullName, setfullName] = useState(null);
    const navigate = useNavigate();
    const mutateRegister = useMutation((registerData) => register(registerData), {
        onSuccess: (res) => {
            if (res?.data?.done) {
                navigate("/splash", {replace: true});
            }
            toast(res?.data?.error?.message);
        }
    })
    const handleRegister = () => {
        mutateRegister.mutate({full_name: fullName})
    }
    return (
        <div className="w-full h-screen flex flex-col">
            <div className="relative h-[237px]">
                <div className="absolute overflow-hidden">
                    <div className="bg-svg-gradient">
                        <div className="bg-svg-gradient2">
                            <div className="w-screen h-[237px] relative">
                                {/* <TriangleLoginSVG/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-full w-full bg-black-BG">
                <div className="flex max-w-[640px] mx-auto flex-col justify-center mt-[-9rem] items-center">
                    <VimoIconSVG/>
                    <div className="flex flex-col  mt-[2.5rem] z-10  w-full justify-center items-center">
                        <p className="text-white text-[2rem] z-10 fa-format-400"> وارد کردن نام</p>
                        <p className="text-gray-B text-[1.6rem] z-10 fa-format-500 mt-5">
                            یک نام برای اکانت خود انتخاب کنید
                        </p>
                        <div className="w-full  flex flex-col justify-center items-end pt-10 pb-1">
                            <p className="w-full text-right mb-2 px-9 text-gray-A text-[1.4rem] mt-1 z-10 fa-format-300">
                                نام
                            </p>
                            <div
                                className="w-full rounded-[15px] mt-1 mb-8 flex h-[48px] flex-row justify-center py-3 px-9 items-center"
                            >
                                <input
                                    dir='rtl'
                                    className='bg-black-box w-full rounded-[15px] h-[48px] focus:outline-none px-4 text-[1.6rem] text-white fa-format-300'
                                    onChange={(e) => setfullName(e.target.value)}
                                    value={fullName}
                                />
                            </div>
                        </div>
                        <CustomButton
                            onClick={handleRegister}
                        >
                            ورود
                        </CustomButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
