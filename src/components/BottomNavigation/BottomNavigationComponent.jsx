import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {useNavigate, useLocation} from "react-router-dom";
import {BottomNavigationItem} from "../../constant/BottomNavigationItem";
import { BottomNavigationVisibleRoutes } from "../../constant/BottomNavigationVisibleRoutes";

function BottomNavigationComponent() {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const items = BottomNavigationItem;
    const visibleRoutes = BottomNavigationVisibleRoutes

    useEffect(() => {
     if(location.pathname.split("/")[1]=="home"){
        setValue(0)
     }else if(location.pathname.split("/")[1]=="search"){
        setValue(1)
     }else if(location.pathname.split("/")[1]=="support"){
        setValue(2)
     }else if(location.pathname.split("/")[1]=="profile"){
        setValue(3)
     }
    }, [])
    

    return (
        <div
            dir='rtl'
            className="w-full  z-50  fixed bottom-0 button-navigation-l bg-black-box  left-[50%] translate-x-[-50%]  max-w-[480px] "
        >
            <Box>
                <BottomNavigation
                    elevation={5}
                    showLabels
                    className="   button-navigation  focus:bg-gray3 pl-2 "
                    sx={{backgroundColor: "#28242D"}}
                    value={value}
                    onChange={(event, selectedItem) => {
                        setValue(selectedItem);
                    }}
                >
                    {items.map((item) => (
                        <BottomNavigationAction
                        className="!rounded-md"
                            onClick={(e) => navigate(item.link)}
                            icon={
                                <div className={`${value === item.id ? "" : ""}  mb-2 `}>
                                    {value === item.id ? item.activeIcon : item.icon}
                                </div>
                            }
                            label={
                                <span
                                    className={`${value === item.id ? " text-blue" : ""} fa-format-400 !tracking-[-0.02px] text-[10px]`}
                                >

                                    {item.name}

                                </span>
                            }
                        />
                    ))}
                </BottomNavigation>
            </Box>
        </div>
    );
}

export default BottomNavigationComponent;
