import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AllVisas from "./Components/AllVisas";
import AddVisa from "./Components/AddVisa";
import MyAddedVisa from "./Components/MyAddedVisa";
import MyVisaApplication from "./Components/MyVisaApplication";
import Root from "./Pages/Root";
import ErrorPage from "./Components/ErrorPage";
import AuthProvider from "./Auth/AuthProvider";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import PrivateRoutes from "./Auth/PrivateRoutes";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/all-visas", element: <AllVisas></AllVisas>,
        loader: () => fetch('http://localhost:5000/Visa')
      },
      {
        path: "/add-visa",
        element: <PrivateRoutes><AddVisa></AddVisa></PrivateRoutes>,
      },
      {
        path: "/my-added-visas",
        element: <PrivateRoutes><MyAddedVisa></MyAddedVisa></PrivateRoutes>,
      },
      {
        path: "/my-visa-applications",
        element: <PrivateRoutes><MyVisaApplication></MyVisaApplication></PrivateRoutes>,
      },
      {
        path: "/login", element:
          <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
