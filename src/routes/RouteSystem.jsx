import React from "react";
import {Routes, Route} from "react-router-dom";
import GetNumber from "../pages/login/GetNumber";
import VerifyCode from "../pages/login/VerifyCode";
import PrivateRoute from "./PrivateRoute";
import {Search} from "../pages/search/Search";
import {Setting} from "../pages/setting/Setting";
import Splash from "../pages/splash/splash";
import {ProfileEdit} from "../pages/ProfileEdit/ProfileEdit";
import {Home} from "../pages/home/Home";
import Register from "../pages/login/Register";
import EditProfileName from "../pages/ProfileEdit/EditProfileName";
import EditPhoneNumber from "../pages/ProfileEdit/EditPhoneNumber";
import EditPhoneGetOtp from "../pages/ProfileEdit/EditPhoneGetOtp";
import ManageActiveDevices from "../pages/manageActiveDevices/ManageActiveDevices";

import SupportMainPage from "../pages/support/supportMainPage/SupportMainPage";
import TicketCategory from "../pages/support/ticketCategory/TicketCategory";
import PublicRoute from "./PublicRoute";
import {CreateTicket} from "../pages/support/createTicket/CreateTicket";
import TicketSubCategory from "../pages/support/ticketSubCategory/TicketSubCategory";
import ShowMessage from "../pages/message/ShowMessage";
import {AboutUs} from "../pages/aboutUs/AboutUs";
import AboutUsSingleItem from "../pages/aboutUs/AboutUsSingleItem";
import InactiveSessions from "../pages/manageActiveDevices/InactiveSessions";
import Profile from "../pages/profile/Profile";
import Payment from "../pages/payment/Payment";
import Plans from "../pages/plans/Plans";
import FavoriteVideos from "../pages/profile/FavoriteVideos";
import FollowedArtists from "../pages/profile/FollowedArtists";
import PopularArtists from "../pages/PoPularArtists/PopularArtists";
import ArtistsProfile from "../pages/profile/ArtistsProfile";
import VideoLists from "../pages/lists/VideoLists";
import EditVerifyCode from "../pages/ProfileEdit/EditVerifyCode";


function RouteSystem() {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <Home/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="login/get-number"
                    element={
                        <PublicRoute>
                            <GetNumber/>
                        </PublicRoute>
                    }
                />
                <Route
                    path="login/verification-code"
                    element={
                        <PublicRoute>
                            <VerifyCode/>
                        </PublicRoute>
                    }
                />
                <Route
                    path="login/register"
                    element={
                        <PublicRoute>
                            <Register/>
                        </PublicRoute>
                    }
                />
                <Route
                    path="/splash"
                    element={

                        <Splash/>

                    }
                />
                <Route
                    path="/search"
                    element={
                        <PrivateRoute>
                            <Search/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/setting"
                    element={
                        <PrivateRoute>
                            <Setting/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/profile/edit"
                    element={
                        <PrivateRoute>
                            <ProfileEdit/>
                        </PrivateRoute>
                    }

                />
                <Route
                    path="/profile/edit-profile-name"
                    element={
                        <PrivateRoute>
                            <EditProfileName/>
                        </PrivateRoute>
                    }

                />
                <Route
                    path='/edit-phone-get-otp'
                    element={
                        <PrivateRoute>
                            <EditPhoneGetOtp/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path='/profile/edit-phone-number'
                    element={
                        <PrivateRoute>
                            <EditPhoneNumber/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path='/profile/edit-verify-code'
                    element={
                        <PrivateRoute>
                            <EditVerifyCode/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path='/manage-active-devices'
                    element={
                        <PrivateRoute>
                            <ManageActiveDevices/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path='/inactive-sessions'
                    element={
                        <PrivateRoute>
                            <InactiveSessions/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path='/support'
                    element={
                        <PrivateRoute>
                            <SupportMainPage/>
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/support/message/show"
                    element={
                        <PrivateRoute>
                            <ShowMessage/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path='/support/ticket-subcategory'
                    element={
                        <PrivateRoute>
                            <TicketSubCategory/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path='/support/ticket-category'
                    element={
                        <PrivateRoute>
                            <TicketCategory/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path='/about-us'
                    element={
                        <PrivateRoute>
                            <AboutUs/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path='/about-us/item'
                    element={
                        <PrivateRoute>
                            <AboutUsSingleItem/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path='/support/create-ticket'
                    element={
                        <PrivateRoute>
                            <CreateTicket/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path='/profile'
                    element={
                        <PrivateRoute>
                            <Profile/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path='/plans'
                    element={
                        <PrivateRoute>
                            <Plans/>
                        </PrivateRoute>
                    }
                />

                <Route
                    path='/payment'
                    element={
                        <PrivateRoute>
                            <Payment/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path='/profile/favorite-videos'
                    element={
                        <PrivateRoute>
                            <FavoriteVideos/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/profile/followed-artists"
                    element={
                        <PrivateRoute>
                            <FollowedArtists/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/profile/artist-profile"
                    element={
                        <PrivateRoute>
                            <ArtistsProfile/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/popular-artists"
                    element={
                        <PrivateRoute>
                            <PopularArtists/>
                        </PrivateRoute>
                    }
                /> 
                <Route
                    path="/lists"
                    element={
                        <PrivateRoute>
                            <VideoLists/>
                        </PrivateRoute>
                    }
                />
            </Routes>
        </>
    );
}

export default RouteSystem;
