import * as React from "react";
import ReactPlayer from "react-player";
import { useState } from "react";
import PlayerNextSVG from "./assets/PlayerNextSVG";
import PlayerShuffleSVG from "./assets/PlayerShuffleSVG";
import PlayerPauseSVG from "./assets/PlayerPauseSVG";
import PlayerPlaySVG from "./assets/PlayerPlaySVG";
import PlayerPreviousSVG from "./assets/PlayerPreviousSVG";
import PlayerLoopSVG from "./assets/PlayerLoopSVG";
import PlayerLikeSVG from "./assets/PlayerLikeSVG";
import PlayerFullScreenSVG from "./assets/PlayerFullScreenSVG";
import PlayerDownloadSVG from "./assets/PlayerDownloadSVG";
import PlayerTollBar from "./PlayerTollBar";
import PlayerLockSvg from "./assets/PlayerLockSVG";
import PlayerSeekBarSVG from "./assets/PlayerSeekBarSVG";
import BottomSheetHeader from "../bottomSheet/BottomSheetHeader";
import SwipeBottomSheet from "../bottomSheet/SwipeBottomSheet";
import PlayerSettingBottomSheet from "./bottomSheets/PlayerSettingBottomSheet";
import PlayerInformationBottomSheet from "./bottomSheets/PlayerInformationBottomSheet";
import PlayerSetQualityBottomSheet from "./bottomSheets/PlayerSetQualityBottomSheet";

export const Player = () => {
    const [lastTimeout, setLastTimeout] = useState();
    const [openPlayerSettingBottomSheet, setOpenPlayerSettingBottomSheet] =
        useState(false);
    const [
        openPlayerInformationBottomSheet,
        setOpenPlayerInformationBottomSheet,
    ] = useState(false);
    const [openPlayerSetQualityBottomSheet, setOpenPlayerSetQualityBottomSheet] =
        useState(false);

    // player controls show/hide
    const hideControls = (e) => {
        const playerControls = document.getElementById("playerControls");
        playerControls.style.opacity = "";

        const vimoControls = [...document.getElementsByClassName("vimoControl")];
        vimoControls.forEach((item) => {
            item.classList.add("preventPointerEvent");
        });
    };

    const showControls = () => {
        const playerControls = document.getElementById("playerControls");
        playerControls.style.opacity = "1";
    };

    const touchStartHandler = (e) => {
        const isShow = e.target.style.opacity;
        if (+isShow) {
            hideControls();
        } else {
            showControls();
        }
    };

    const touchMoveHandler = () => {
        showControls();
    };

    const touchEndHandler = () => {
        clearTimeout(lastTimeout);
        let touchTimer = setTimeout(() => {
            hideControls();
        }, 2500);
        setLastTimeout(touchTimer);
    };

    const mouseEnterHandler = () => {
        showControls();
    };

    const mouseLeaveHandler = () => {
        hideControls();
    };

    const transitionHandler = (e) => {
        if (+e.target.style.opacity) {
            const vimoControls = [...document.getElementsByClassName("vimoControl")];
            vimoControls.forEach((item) => {
                item.classList.remove("preventPointerEvent");
            });
        }
    };
    // player controls show/hide

    const stopPropagation = (event) => {
        event.stopPropagation();
    };
    // bottomSheet functions

    const togglePlayerInformationDrawer = (newOpen) => () => {
        setOpenPlayerSettingBottomSheet(newOpen);
    };
    const handlePlayerInformationBottomSheet = () => {
        setOpenPlayerSettingBottomSheet((prevState) => {
            return !prevState;
        });
    };

    const play = (event) => {};

    return (
        <>
            <div className="playerContainer fixed flex justify-center items-center top-0 left-[50%] transform translate-x-[-50%] w-full max-w-[480px] h-full z-[2px] bg-black-BG">
                <div
                    id={"playerControls"}
                    className="playerControlContainer transition-all duration-[250ms] ease-in-out absolute flex flex-col justify-between items-center top-0 left-0 w-full h-full z-[3] opacity-0 max-769:left-[1px] bg-player-control-bg  "
                    onTouchStart={touchStartHandler}
                    onTouchMove={touchMoveHandler}
                    onTouchEnd={touchEndHandler}
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                    onTransitionEnd={transitionHandler}
                >
                    <div className=" w-full flex justify-center items-start">
                        <PlayerTollBar
                            onOpenBottomSheet={handlePlayerInformationBottomSheet}
                        />
                    </div>
                    <div
                        className=" fixed w-full top-[50%] left-0 transform translate-y-[-50%]  flex justify-center items-center
                z-[3] "
                    >
                        <div className="w-[304px] flex justify-between items-center">
                            <div className="flex justify-start items-center grow leftSide">
                                <div className="w-[24px] h-[23px] vimoControl drop-shadow-2xl ">
                                    <PlayerLoopSVG />
                                </div>
                            </div>
                            <div className="centerSide flex justify-between items-center w-[194px] ">
                                <div className="w-[23px] h-[24px] vimoControl ">
                                    <PlayerPreviousSVG onTouchStart={stopPropagation} />
                                </div>
                                <div className="w-[44px] h-[48px] vimoControl">
                                    <PlayerPauseSVG
                                        onClick={play}
                                        onTouchStart={stopPropagation}
                                        onTouchStart={stopPropagation}
                                    />
                                    <PlayerPlaySVG
                                        onClick={play}
                                        onTouchStart={stopPropagation}
                                        onTouchStart={stopPropagation}
                                    />
                                </div>
                                <div className="w-[23px] h-[24px] vimoControl">
                                    <PlayerNextSVG onTouchStart={stopPropagation} />
                                </div>
                            </div>
                            <div className="rightSide flex justify-end items-center grow">
                                <div
                                    onTouchStart={stopPropagation}
                                    className="w-[24px] h-[21px] vimoControl"
                                >
                                    <PlayerShuffleSVG />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-end w-full px-[22px] items-center bottomControlContainer">
                        <div className="bottomSVGContainer w-full flex justify-between items-center px-[6px]  ">
                            <div
                                className="w-[24px] h-[21px] cursor-pointer vimoControl"
                                onTouchStart={stopPropagation}
                            >
                                <PlayerLockSvg />
                            </div>
                            <div
                                className={`w-[24px] h-[21px] `}
                                onTouchStart={stopPropagation}
                            >
                                <PlayerLikeSVG />
                            </div>
                        </div>
                        <div
                            className={`seekBarContainer w-full pt-[23px] pb-[19px]  vimoControl`}
                            onTouchStart={stopPropagation}
                        >
                            <PlayerSeekBarSVG />
                        </div>
                        <div className="w-full justify-between flex pr-[3px]  pb-[25px]">
                            <div className=" text-[1.6rem] leading-[16px] fa-format-400 w-1/2 flex justify-start items-center   text-left text-gray-A">
                                <span>۰۱:۰۹</span>
                                <span className="mx-[4px]">/</span>
                                <span>۰۵:۰۹</span>
                            </div>
                            <div className="w-1/2 flex justify-end items-center">
                                <div className="w-[25px] h-[25px]">
                                    <PlayerDownloadSVG />
                                </div>
                                <div className="w-[22.5px] h-[22.5px] ml-[31px]">
                                    <PlayerFullScreenSVG />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative h-auto w-full">
                    <ReactPlayer
                        url={"temp-video/tailwind.mp4"}
                        width="100%"
                        height="100%"
                        playing={true}
                        // loop={true}
                        controls={false}
                        muted={true}
                    />
                </div>
            </div>
            <SwipeBottomSheet
                Header={<BottomSheetHeader title="گزینه های پخش " />}
                Content={<PlayerSettingBottomSheet />}
                open={openPlayerSettingBottomSheet}
                toggleDrawer={togglePlayerInformationDrawer}
            />
            <SwipeBottomSheet
                contentPaddingBottom={true}
                Header={<BottomSheetHeader title="اطلاعات" />}
                Content={<PlayerInformationBottomSheet />}
                open={openPlayerInformationBottomSheet}
                toggleDrawer={togglePlayerInformationDrawer}
            />
            <SwipeBottomSheet
                Header={<BottomSheetHeader title="کیفیت پخش" />}
                Content={<PlayerSetQualityBottomSheet />}
                open={openPlayerSetQualityBottomSheet}
                toggleDrawer={togglePlayerInformationDrawer}
            />
        </>
    );
};
