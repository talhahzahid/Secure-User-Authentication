// index.js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "../Layout";
import Home from "./Screen/Home";
import AddBlog from "./Screen/AddBlog";
import Signup from "./Screen/Signup";
import SignIn from "./Screen/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "addblog",
        element: <AddBlog />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
