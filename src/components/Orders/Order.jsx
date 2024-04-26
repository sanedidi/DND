import React from "react";
import "./Orders.module.scss";
import { Header } from "../Header";
import s from "./Orders.module.scss";
const Order = () => {
  return (
    <>
      <Header title={"Cегодняшние заказы"} />
      <div className={s.order}>
        <div className={s.order__wrapper}>
          <div className={s.order__top}>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
