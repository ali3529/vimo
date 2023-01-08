import {Skeleton} from "@mui/material";
import React from "react";
import ShowTicketAvatarSvg from "../../assets/ShowTicketAvatarSvg";

function RecieveMessageItemShimmer() {
    return (<>
        <div className="w-full flex flex-row gap-3 relative">
        <span>
          {<Skeleton
              className="after:!animate-spin-slow  after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded-[12px] "
              animation="wave"
              variant="text"
              width={44}
              height={70}
              sx={{animationDuration: "0.80s !important"}}
          />}
        </span>
            <div className="w-full bg-black-box rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px] p-[18px]">
                <div className="w-full flex flex-row justify-between ">
                    {<Skeleton
                        className="after:!animate-spin-slow  after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded-[2px] "
                        animation="wave"
                        variant="text"
                        width={45}
                        height={15}
                        sx={{animationDuration: "0.80s !important"}}
                    />}
                    {<Skeleton
                        className="after:!animate-spin-slow  after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded-[2px] "
                        animation="wave"
                        variant="text"
                        width={95}
                        height={15}
                        sx={{animationDuration: "0.80s !important"}}
                    />}
                </div>

                <div className="w-full mt-[12px]">
                    {<Skeleton
                        className="after:!animate-spin-slow !w-full !mt-2  after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded-[2px] "
                        animation="wave"
                        variant="text"
                        height={15}
                        sx={{animationDuration: "0.80s !important"}}
                    />}{" "}
                    {<Skeleton
                        className="after:!animate-spin-slow !w-full !mt-2 after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded-[2px] "
                        animation="wave"
                        variant="text"
                        height={15}
                        sx={{animationDuration: "0.80s !important"}}
                    />}
                    {<Skeleton
                        className="after:!animate-spin-slow !w-1/2 !mt-2  after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded-[2px] "
                        animation="wave"
                        variant="text"
                        height={15}
                        sx={{animationDuration: "0.80s !important"}}
                    />}{" "}
                </div>
            </div>
        </div>
        <div className="w-full flex flex-row-reverse gap-3 relative">
        <span>
          {<Skeleton
              className="after:!animate-spin-slow  after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded-[12px] "
              animation="wave"
              variant="text"
              width={44}
              height={70}
              sx={{animationDuration: "0.80s !important"}}
          />}
        </span>
            <div className="w-full bg-black-box rounded-tr-[30px] rounded-bl-[30px] rounded-br-[30px] p-[18px]">
                <div className="w-full flex flex-row-reverse justify-between ">
                    {<Skeleton
                        className="after:!animate-spin-slow  after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded-[2px] "
                        animation="wave"
                        variant="text"
                        width={45}
                        height={15}
                        sx={{animationDuration: "0.80s !important"}}
                    />}
                    {<Skeleton
                        className="after:!animate-spin-slow  after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded-[2px] "
                        animation="wave"
                        variant="text"
                        width={95}
                        height={15}
                        sx={{animationDuration: "0.80s !important"}}
                    />}
                </div>

                <div className="w-full mt-[12px]">
                    {<Skeleton
                        className="after:!animate-spin-slow !w-full !mt-2  after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded-[2px] "
                        animation="wave"
                        variant="text"
                        height={15}
                        sx={{animationDuration: "0.80s !important"}}
                    />}{" "}
                    {<Skeleton
                        className="after:!animate-spin-slow !w-full !mt-2 after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded-[2px] "
                        animation="wave"
                        variant="text"
                        height={15}
                        sx={{animationDuration: "0.80s !important"}}
                    />}
                    {<Skeleton
                        className="after:!animate-spin-slow !w-1/2 !mt-2  after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded-[2px] "
                        animation="wave"
                        variant="text"
                        height={15}
                        sx={{animationDuration: "0.80s !important"}}
                    />}
                </div>
            </div>
        </div>


    </>);
}

export default RecieveMessageItemShimmer;
