import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginComponent from "./loginRoute";
import TeacherComponent from "./TeacherRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/teacher" element={<TeacherComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
