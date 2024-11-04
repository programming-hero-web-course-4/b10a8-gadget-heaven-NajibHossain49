import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="h-16">
        <Navbar />
      </div>
      <ToastContainer />

      <div className="min-h-[calc(100vh-244px)] py-12 container mx-auto px-12">
        {/* Dynamic Section */}
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
