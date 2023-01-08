import React from "react";
import {useLocation} from "react-router-dom";
import {BottomNavigationVisibleRoutes} from "../../constant/BottomNavigationVisibleRoutes";
import BottomNavigationComponent from "./BottomNavigationComponent";

function HandleBottomNavigationVisibility() {
    const isBottonNavigationTrue = true;
    const location = useLocation();
    const visibleRoutes = BottomNavigationVisibleRoutes
    return (
        <>
            {visibleRoutes.includes(location.pathname) && (
                <BottomNavigationComponent/>
            )}
        </>
    );
}

export default HandleBottomNavigationVisibility;
