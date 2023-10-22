import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./Pages/ErrorPage";
import Profile from "./Pages/Profile";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import App from "./App";
import EditPage from "./Pages/EditPage";
import Home from "./Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:email",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/edit",
        element: <EditPage />,
      },
    ],
  },
]);

const PageRoutes = () => {
  return <RouterProvider router={router} />;
};

export default PageRoutes;
