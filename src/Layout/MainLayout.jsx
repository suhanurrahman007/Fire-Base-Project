import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import Footer from "../components/Header/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="space-y-5">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;