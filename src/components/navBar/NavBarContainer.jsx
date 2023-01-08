import React from 'react'

function NavBarContainer({children, ContainerStyle}) {
    return (
        <div className={`w-full  bg-support-background `}>
            <div
                className={` w-full backdrop-blur-xl ${ContainerStyle} flex flex-col  pb-[18px] pt-[24px] fixed top-0  left-[50%] translate-x-[-50%] max-w-[480px] z-50`}

            >
                {children}
            </div>
        </div>
    )
}

export default NavBarContainer