import * as React from "react";
import {useNavigate} from "react-router-dom";
import ChevronLeftSVG from "../common/assets/ChevronLeftSVG";
import NavBarContainer from "../navBar/NavBarContainer";

export const ToolBar = ({title, style, chevronColor, onClick, changeDefaultBack, ContainerStyle}) => {
    const navigate = useNavigate();
    const handleBackButtonClick = () => {
        if (changeDefaultBack) onClick()
        else navigate(-1);
    };

    return (
        <NavBarContainer ContainerStyle={ContainerStyle}>
            <div
                className={`w-full flex items-center justify-between max-w-[480px] z-40  bg-transparent hf  backdrop-blur-xl ${style} `}
            >
                <p className="text-white text-[1.8rem] fa-format-400 pr-9">{title}</p>
                <span className="pl-9" onClick={() => handleBackButtonClick()}>
                    <ChevronLeftSVG chevronColor={chevronColor}/>
                </span>
            </div>
        </NavBarContainer>
    );
};
