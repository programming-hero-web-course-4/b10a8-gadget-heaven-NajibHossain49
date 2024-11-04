import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Heading from "../Components/Heading";
import CategoriesList from "../Components/CategoriesList ";
import { ToastContainer } from "react-toastify";

const Home = () => {
  // Retrieve data from the loader
  const products = useLoaderData();

  return (
    <div>

<ToastContainer />
      {/* Banner */}
      <Banner />
      {/* Heading */}
      <Heading
        title="Explore Cutting-Edge Gadgets"
        subtitle="Choose your desired coffee category to browse through specific coffees that fit in your taste."
      />
      {/* Categories List */}
      {/* <CategoriesList categories={products} /> */}
      {/* Dynamic Nested Component */}
      <Outlet />
    </div>
  );
};

export default Home;
