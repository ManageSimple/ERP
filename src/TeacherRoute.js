import React from "react";
import HeaderComponent from "./components/HeaderForPages";
import FooterComponent from "./components/FooterForPages";
import FacultyLogin from "./Teacher /TeacherEntryPage";


const TeacherComponent = () => {
  return (
    <>
    <HeaderComponent />
    <FacultyLogin />
    <FooterComponent />
    </>
  );
};

export default TeacherComponent;
