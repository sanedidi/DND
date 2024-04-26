import React from "react";
import { Route, Routes } from "react-router-dom";
import Order from "../components/Orders/Order";
import MainLayOut from "../LayOuts/MainLayOut/MainLayOut";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<MainLayOut />}>
          <Route path="/mainOrders" element={<Order />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
