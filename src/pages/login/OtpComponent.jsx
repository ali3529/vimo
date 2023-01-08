import React from "react";
import OtpInput from "react-otp-persian";

// import OtpInput from "react-otp-input";

function OtpComponent({otpStyle, setOtp, otp}) {
    const handleChange = (otp) => {
        setOtp(otp);
    };

    return (
        <div>
            <OtpInput
                shouldAutoFocus={true}
                type="tel"
                value={otp}
                onChange={handleChange}
                numInputs={4}
                className={otpStyle}
                separator={<span></span>}
                isInputNum={true}

                inputStyle=" bg-inputBoxColor outline-none"
            />
        </div>
    );
}

export default OtpComponent;
