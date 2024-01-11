import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import RegistrationPage from "./pages/Registration/Registration.page";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutPage from "./pages/About/AboutPage";
import HomePage from "./pages/Home/HomePage";
import AdminPage from "./pages/AdminPage/Admin.page";
import EventsPage from "./pages/EventsPage/EventsPage.page";
import ErrorPage from "./pages/ErrorPage/ErrorPage.page";
import BuddyPage from "./pages/Buddy/Buddy.page";
import BuddyListPage from "./pages/Buddy/BuddyList.page";
import UserInfo from "./pages/Temp/UserInfo.Screen";
import MembersPage from "./pages/MembersPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/register" element={<RegistrationPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
        <Route path="/events" element={<EventsPage />}></Route>
        <Route path="/buddy" element={<BuddyPage />}></Route>
        <Route path="/buddy-list" element={<BuddyListPage />}></Route>
        <Route path="/members" element={<MembersPage />}></Route>
        <Route path="/temp" element={<UserInfo />}></Route>
        <Route path="/*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
