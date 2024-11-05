import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider

const MainLayout = () => {
  return (
    <HelmetProvider> {/* Wrap the layout with HelmetProvider */}
      <div>
        {/* Navbar */}
        <div className="h-16">
          <Navbar />
        </div>

        {/* Single ToastContainer */}
        <ToastContainer position="top-right" autoClose={2000} />

        <div className="min-h-[calc(100vh-244px)] py-12 container mx-auto px-12">
          {/* Dynamic Section */}
          <Outlet />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default MainLayout;
