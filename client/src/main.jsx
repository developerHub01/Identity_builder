import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PageRoutes from "./PageRoutes.jsx";
import FormDataProvider from "./Provider/FormDataProvider.jsx";
import UserDataProvider from "./Provider/UserDataProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormDataProvider>
      <UserDataProvider>
        <PageRoutes />
      </UserDataProvider>
    </FormDataProvider>
  </React.StrictMode>
);
