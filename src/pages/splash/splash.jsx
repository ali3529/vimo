import React, {useEffect} from 'react';
import SplashIcon from "../../components/splash/assets/SplashIcon";
import SplashBlur from "../../components/splash/assets/SplashBlur";
import {useQuery} from '@tanstack/react-query';
import {initializeRequest} from '../../service/ApiClient';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {selectUserToken} from '../../redux/login/LoginSlice';
import {checkSum, initialData, selectCheckSum, selectInitialData} from '../../redux/initialize/InitializeSlice';

function Splash(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const checkSumSelector = useSelector(selectCheckSum);
    const initialDataSelector = useSelector(selectInitialData);
    const token = useSelector(selectUserToken);
    const newData = {};
 
    useEffect(() => {
        if (token == null) {
            // redirect user if token in null
            navigate("/login/get-number", {replace: true});
        }
    }, []);


    const initializeRequestQuery = useQuery(["initializeRequestQuery"], () => initializeRequest(checkSumSelector), {
        onSuccess: (res) => {
            if (res?.data?.done) {
                // store checksum
                if (checkSumSelector == null) {
                    // store data in redux  first time
                    dispatchData(res?.data?.result);
                    dispatchCheckSum(res?.data?.result?.checksums);
                } else {
                    // handle null data and store new data
                    Object.keys(res?.data?.result).map((item) => {
                        if (res?.data?.result[item] == null) {
                            newData[item] = initialDataSelector.user[item];
                        } else {
                            newData[item] = res?.data?.result[item];
                        }
                    });
                    //store new data in redux
                    dispatchData(newData);
                }
            }

            navigate("/", {replace: true});
        },
        // refetchOnWindowFocus: false,
    })
    // store checksum in redux
    const dispatchCheckSum = (data) => {
        dispatch(
            checkSum({
                checkSum: data,
            })
        );
    };
    // store initialize data in redux
    const dispatchData = (data) => {
        dispatch(
            initialData({
                initialData: data,
            })
        );
    };
    return (
        <div className="w-full h-screen bg-[#0F0817]">
            <div className="fixed bottom-[-9%] right-[50%] translate-x-[50%] z-0 w-[680px] h-[681px]">
                <SplashBlur/>
            </div>
            <div className="flex gap-8 w-full h-full flex-col items-center justify-center py-[50px] !z-10">
                <div className="flex fixed bottom-[38%] items-center justify-center w-full">
                    <SplashIcon/>
                </div>
            </div>
        </div>
    );
}

export default Splash;