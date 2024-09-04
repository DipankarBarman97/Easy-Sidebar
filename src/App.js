import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import MainRoutes from "./Routes/MainRoutes";

const App = () => {
  return (
    <>
      <Router>
        <div className="wrapper">
          <Sidebar />
          <div className="wrapper-main">
            <Header />
            <Routes>
              <Route path={MainRoutes.HOME} element={<Home />} />
              <Route path={MainRoutes.CONTACT} element={<Contact />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
