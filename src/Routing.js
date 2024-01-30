import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Login from "./Login";
import Home from "./Components/Home";
import MatserPage from "./Components/Masterpage";
import Dashboardchart from "./Components/Dashboardchart";
import Cartpage from "./Components/Cartpage";

export default function Routing() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />

        <Route path="/index" element={<Home />}>
          <Route path="/index/master" element={<MatserPage />} />
          <Route path="/index/carts" element={<Cartpage />} />
          <Route path="/index/dashboard" element={<Dashboardchart />} />
        </Route>
        {/* <Route path="error" element={<ErrorPage404 />} />
        <Route path="*" element={<ErrorPage404 />} />  */}
      </Routes>
    </HashRouter>
  );
}
