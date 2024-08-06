import React from "react";
import HeaderComponent from "./components/HeaderForPages";
import LoginPage from "./Pages/login";
import FooterComponent from "./components/FooterForPages";

const LoginComponent = () => {
  return (
    <>
    <HeaderComponent />
    <LoginPage />
    <FooterComponent />
    </>
  );
};

export default LoginComponent;
