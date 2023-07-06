import React from "react";
import "./App.css";

import Home from "./page/Home";
import { Route, Routes } from "react-router-dom";


// import Admin from "./page/Admin";
import Register from "./components/Register";
import Login from "./components/Login";
import AddtoCart from "./components/AddtoCart";
import Allplant from "./components/Allplant";
import Allsupplies from "./components/Allsupplies";
import PlantDetail from "./components/PlantDetail";
import SuppliesDetail from "./components/SuppliesDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path={`/plants/:tag`} element={<PlantDetail/>}></Route>
        <Route path={`/supplies/:tag`} element={<SuppliesDetail/>}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/addtocart" element={<AddtoCart />}></Route>
        <Route path="plants" element={<Allplant/>}></Route>
        <Route path="/supplies" element={<Allsupplies />}></Route>
      </Routes>
    </>
  );
};

export default App;
