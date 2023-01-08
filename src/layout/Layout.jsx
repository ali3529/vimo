import * as React from 'react';
import HandleBottomNavigationVisibility from '../components/BottomNavigation/HandleBottomNavigationVisibility';
import PageContainer from './PageContainer';


export const Layout = ({children}) => {
    return (
        <div  className="w-full h-full  flex justify-center item z-[1] overflow-hidden  max-w-[480px]">
            <PageContainer>{children}</PageContainer>
        </div>
    );
};