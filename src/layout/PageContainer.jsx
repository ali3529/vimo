import React from "react";

import {useLocation} from "react-router-dom";
import HandleBottomNavigationVisibility from "../components/BottomNavigation/HandleBottomNavigationVisibility";
import {BottomNavigationVisibleRoutes} from "../constant/BottomNavigationVisibleRoutes";
import MaskLayout from "./MaskLayout";

function PageContainer({children}) {
    const location = useLocation();
    return (
        <div className="max-w-[480px] h-full flex flex-col overflow-hidden">
            <MaskLayout/>
            <div
                className={` w-screen h-full    max-w-[480px]  overflow-hidden 
                ${BottomNavigationVisibleRoutes.includes(location.pathname) ?"container-padding ": "safe-area"}`}
            >
                {children}
            </div>
            <HandleBottomNavigationVisibility/>
        </div>
    );
}

export default PageContainer;
