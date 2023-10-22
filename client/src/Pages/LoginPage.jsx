import React, { useContext, useState } from "react";
import { socialIcons } from "../Constants/IconList";
import { Link } from "react-router-dom";
import LoginSignUpForm from "../Components/LoginSignUpForm";
import { FormDataContext } from "../Provider/FormDataProvider";

const LoginPage = () => {
  const { formDataState } = useContext(FormDataContext);
  console.log(formDataState);
  return (
    <LoginSignUpForm
      formBtnText="Login"
      redirectText="Create an account?"
      redirectLink="/signup"
    />
  );
};

export default LoginPage;
