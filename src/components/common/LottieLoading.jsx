import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/ios-spiner.json";

function LottieLoading({width,height}) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <div>
      <Lottie
        
        isClickToPauseDisabled={true}
        options={defaultOptions}
        height={height}
        width={width}
      />
    </div>
  );
}

export default LottieLoading;
