import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AllVisas from "./Components/AllVisas";
import AddVisa from "./Components/AddVisa";
import MyAddedVisa from "./Components/MyAddedVisa";
import MyVisaApplication from "./Components/MyVisaApplication";
import Authentication from "./Components/Authentication";
import Root from "./Pages/Root";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/all-visas", element: <AllVisas></AllVisas>},
      {
        path: "/add-visa",
        element: <AddVisa></AddVisa>,
      },
      {
        path: "/my-added-visas",
        element: <MyAddedVisa></MyAddedVisa>,
      },
      {
        path: "/my-visa-applications",
        element: <MyVisaApplication></MyVisaApplication>,
      },
      { path: "/login", element: <Authentication></Authentication> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
