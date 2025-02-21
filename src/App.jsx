import React, { useContext, useEffect, useState } from "react";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import GreenAppContextProvider, { CarContext } from "./context/GreenAppContext";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import SellerProfile from "./components/pages/profilepage/SellerProfile";
import { FaX } from "react-icons/fa6";
import UserProfile from "./components/pages/userProfile/UserProfile";
import Advert from "./components/pages/userProfile/Advert";
import Saved from "./components/pages/userProfile/Saved";
import Notification from "./components/pages/userProfile/Notification";
import Message from "./components/pages/userProfile/Message";
import SellMyCar from "./components/pages/userProfile/SellMyCar";
import MyClients from "./components/pages/userProfile/MyClients";
import Feedback from "./components/pages/userProfile/Feedback";
import Performance from "./components/pages/userProfile/Performance";
import Balance from "./components/pages/userProfile/Balance";
import Setting from "./components/pages/userProfile/Setting";
import SettingsLayout from "./components/pages/Settings/SettingsLayout";
import PersonalDetails from "./components/pages/Settings/PersonalDetails";
import BusinessDetails from "./components/pages/Settings/BusinessDetails";
import DisableChat from "./components/pages/Settings/DisableChat";
import DisableFeedback from "./components/pages/Settings/DisableFeedback";
import GetWhatsapp from "./components/pages/Settings/GetWhatsapp";
import ManageNotification from "./components/pages/Settings/ManageNotification";
import ChangePassword from "./components/pages/Settings/ChangePassword";
import ProtectedRoute from "./components/ProtectedRoute";
import ClientLayout from "./components/pages/clients/ClientLayout";
import ViewedYourAds from "./components/pages/clients/ViewedYourAds";
import SavedYourAds from "./components/pages/clients/SavedYourAds";
import Upload from "./components/pages/forms/upload/Upload";
import Error from "./components/Error";

const App = () => {
  const { showLogOutMenu, setShowLogOutMenu, isLoggedIn, setIsLoggedIn } =
    useContext(CarContext);

  // to make page scroll to top when route changes
  // const ScrollToTop = () => {
  //   const location = useLocation(); // Track the current location (route)

  //   useEffect(() => {
  //     window.scrollTo(0, 0); // Scroll to the top when the route changes
  //   }, [location]); // Depend on location so it triggers on route change

  //   return null;
  // };

  return (
    <MantineProvider>
      <div
        className={` bg-[#00000090] fixed top-0 left-0 w-full h-full bottom-0   z-50 ${
          showLogOutMenu ? "" : "hidden"
        }  `}
        style={{ zIndex: 100 }}
      >
        <div className="flex gap-8 rounded-md   w-[80%] md:w-[450px]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50  bg-white p-5 flex-col items-center justify-center">
          <div className="flex gap-5 items-center justify-between w-full">
            <p className="text-gray-500">Are you sure you want to logout</p>
            <div>
              <FaX
                color="gray"
                onClick={() => {
                  setShowLogOutMenu(false);
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-2  w-full gap-5">
            <button
              onClick={() => {
                setShowLogOutMenu(false);
              }}
              className="border w  cursor-pointer px-2 py-1 md:py-3 rounded-md bg-black text-white font-bold "
            >
              Close
            </button>
            <button
              onClick={() => {
                setShowLogOutMenu(false);
                setIsLoggedIn(false);
              }}
              className="border cursor-pointer px-2 py-1 md:py-3 rounded-md bg-red-400 font-bold text-white"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
      <Navbar />
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sellerprofile/:id" element={<SellerProfile />} />
        <Route path="*" element={<Error />} />"
        <Route
          path="/upload"
          element={
            <ProtectedRoute>
              <Upload />
            </ProtectedRoute>
          }
        />
        <Route
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        >
          <Route path="/profile/Advert" element={<Advert />} />
          <Route path="/profile/Saved" element={<Saved />} />
          <Route path="/profile/Notification" element={<Notification />} />
          <Route path="/profile/Message" element={<Message />} />
          <Route path="/profile/sell my car" element={<SellMyCar />} />
          <Route path="/profile/clients" element={<MyClients />} />
          <Route path="/profile/feedback" element={<Feedback />} />
          <Route path="/profile/performance" element={<Performance />} />
          <Route path="/profile/balance" element={<Balance />} />
        </Route>
        <Route
          element={
            <ProtectedRoute>
              <SettingsLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="/settings/personal-details"
            element={<PersonalDetails />}
          />
          <Route
            path="/settings/business-details"
            element={<BusinessDetails />}
          />
          <Route path="/settings/disable-chat" element={<DisableChat />} />
          <Route
            path="/settings/disable-feedback"
            element={<DisableFeedback />}
          />
          <Route path="/settings/get-whatsapp" element={<GetWhatsapp />} />
          <Route
            path="/settings/manage-notification"
            element={<ManageNotification />}
          />
          <Route
            path="/settings/change-password"
            element={<ChangePassword />}
          />
        </Route>
        <Route
          element={
            <ProtectedRoute>
              <ClientLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/clients/viewed" element={<ViewedYourAds />} />
          <Route path="/clients/saved" element={<SavedYourAds />} />
        </Route>
      </Routes>
    </MantineProvider>
  );
};

export default App;
