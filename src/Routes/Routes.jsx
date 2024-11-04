import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout";
import Dashboard from "../Pages/Dashboard";
import Statistics from "../Pages/Statistics";
import ProductsList from "../Pages/ProductsList";
import ProductDetail from "../Pages/ProductDetail";
import ErrorPage from "../Pages/ErrorPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../product_categories.json"),
        children: [
          {
            path: "/",
            element: <ProductsList />,
            loader: () => fetch("../products.json"),
          },
        ],
      },
      {
        path: "products/:productId",
        element: <ProductDetail />,
        loader: ({ params }) =>
          fetch("../products.json")
            .then((res) => res.json())
            .then((products) =>
              products.find(
                (product) => product.product_id === Number(params.productId)
              )
            ),
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "nothing",
        element: <Statistics />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default Routes;
