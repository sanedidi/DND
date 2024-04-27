import React, { useState, useEffect } from "react";
import s from "./Orders.module.scss";
import { Header } from "../Header";
import CloseBtn from "../svg/CloseBtn";
import AcceptBtn from "../svg/Done";
import CustomInput from "../Input/Input";
import { Search2Icon } from "@chakra-ui/icons";
import CustomMenu from "../Menu/CustomMenu";
import Payme from "../../assets/img/payme.png";
import uzumPay from "../../assets/img/uzumPay.png";
import cash from "../../assets/img/cash.png";
import card from "../../assets/img/card.png";
import delev from "../../assets/img/delev.png";
import self from "../../assets/img/self.png";
import {
  useNewApi,
  useinProgressApi,
  usedeliveringApi,
  useReadyApi,
} from "../../service/state.service";
import UseOrdersProps from "./UseOrdersProps";
import Btn from "../Btn/Btn";
import CustomAccordion from "../Accordion/CustomAccordion";

const Order = () => {
  const getPaymentImage = (paymentMethod) => {
    switch (paymentMethod) {
      case "payme":
        return Payme;
      case "uzumPay":
        return uzumPay;
      case "cash":
        return cash;
      case "card":
        return card;
      default:
        return null;
    }
  };
  const getDeliveryImage = (delevMethod) => {
    switch (delevMethod) {
      case "dele":
        return delev;
      case "self-call":
        return self;
    }
  };

  const {
    newProducts,
    setNewProducts,
    inProgressProducts,
    setInProgressProducts,
    deliveringProducts,
    setDeliveringProducts,
    readyProducts,
    setReadyProducts,
  } = UseOrdersProps();

  const newApiMutation = useNewApi();
  const inProgressApiMutation = useinProgressApi();
  const deliveringApiMutation = usedeliveringApi();
  const readyApiMutation = useReadyApi();

  useEffect(() => {
    const fetchNewProducts = async () => {
      try {
        const { data } = await newApiMutation.mutateAsync();
        setNewProducts(data);
      } catch (error) {
        console.error("Error fetching new products:", error);
      }
    };

    const fetchInProgressProducts = async () => {
      try {
        const { data } = await inProgressApiMutation.mutateAsync();
        setInProgressProducts(data);
      } catch (error) {
        console.error("Error fetching in-progress products:", error);
      }
    };

    const fetchDeliveringProducts = async () => {
      try {
        const { data } = await deliveringApiMutation.mutateAsync();
        setDeliveringProducts(data);
      } catch (error) {
        console.error("Error fetching delivering products:", error);
      }
    };

    const fetchReadyProducts = async () => {
      try {
        const { data } = await readyApiMutation.mutateAsync();
        setReadyProducts(data);
      } catch (error) {
        console.error("Error fetching ready products:", error);
      }
    };

    fetchNewProducts();
    fetchInProgressProducts();
    fetchDeliveringProducts();
    fetchReadyProducts();
  }, []);

  return (
    <>
      <Header title={"Cегодняшние заказы"} />
      <div className={s.order}>
        <div className={s.order__wrapper}>
          <div className={s.order__top}>
            <CustomInput
              width={"100%"}
              icon={<Search2Icon style={{ color: "#0E73F6" }} />}
              text={"Поиск по ID"}
            />
            <CustomMenu MenuBtn={<p>Всего:</p>} MenuIt={"efwjek"} />
          </div>
          <div className={s.order__main_cards}>
            <div className={s.order__cards}>
              <div className={s.order__cards_top_new}>
                <h2>{newProducts[0]?.category ?? ""}</h2>
              </div>
              {newProducts.map((el) => {
                return (
                  <div key={el.id} className={s.order__card}>
                    <div className={s.order__card_top}>
                      <div className={s.order__card_top_left}>
                        <p>ID:{el.name}</p>
                      </div>
                      <div className={s.order__card_top_right}>
                        <p>{el.price} сум</p>
                        <div className={s.order__card_top_right_img}>
                          <img src={getPaymentImage(el.payment)} alt="" />
                          <img src={getDeliveryImage(el.delevery)} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className={s.order__content}>
                      <div className={s.order__prod}>
                        <p>{el.product.num1.product1}</p>
                        <p>{el.product.num1.product2}</p>
                        <p>{el.product.num1.product3}</p>
                      </div>
                      <div className={s.order__time}>
                        <p>{el.time}</p>
                      </div>
                    </div>
                    <div className={s.order__btns}>
                      <Btn
                        btnIcon={<CloseBtn />}
                        btnWidth={"140px"}
                        btnBorder={"1px solid red"}
                        btnBgColor={"transparent"}
                        btnColor={"red"}
                        btnCont={"Отклонить"}
                      />
                      <Btn
                        btnIcon={<AcceptBtn svgFill={"white"} />}
                        btnWidth={"140px"}
                        btnBgColor={"blue"}
                        btnColor={"white"}
                        btnCont={"Принять"}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={s.order__cards}>
              <div className={s.order__cards_top_prog}>
                <h2>{inProgressProducts[0]?.category ?? ""}</h2>
              </div>
              {inProgressProducts.map((el) => {
                return (
                  <div key={el.id} className={s.order__card}>
                    <div className={s.order__card_top}>
                      <div className={s.order__card_top_left}>
                        <p>ID:{el.name}</p>
                      </div>
                      <div className={s.order__card_top_right}>
                        <p>{el.price} сум</p>
                        <div className={s.order__card_top_right_img}>
                          <img src={getPaymentImage(el.payment)} alt="" />
                          <img src={getDeliveryImage(el.delevery)} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className={s.order__content}>
                      <div className={s.order__prod}>
                        <p>{el.product.num1.product1}</p>
                        <p>{el.product.num1.product2}</p>
                        <p>{el.product.num1.product3}</p>
                      </div>
                      <div className={s.order__time}>
                        <p>{el.time}</p>
                      </div>
                    </div>
                    <div
                      style={{ display: "flex", flexDirection: "column" }}
                      className={s.order__btns}
                    >
                      {el.comment === true && (
                        <CustomAccordion
                          key={el.id}
                          accBtn={"Коментарии(1)"}
                          accContent={"lorem"}
                          accColor={"#6E8BB7"}
                        />
                      )}
                      <Btn
                        btnBorder={"1px solid blue"}
                        btnIcon={<AcceptBtn svgFill={"blue"} />}
                        btnWidth={"100%"}
                        btnBgColor={"transparent"}
                        btnColor={"blue"}
                        btnCont={"Готово"}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={s.order__cards}>
              <div className={s.order__cards_top_ready}>
                <h2>{readyProducts[0]?.category ?? ""}</h2>
              </div>
              {readyProducts.map((el) => {
                return (
                  <div key={el.id} className={s.order__card}>
                    <div className={s.order__card_top}>
                      <div className={s.order__card_top_left}>
                        <p>ID:{el.name}</p>
                      </div>
                      <div className={s.order__card_top_right}>
                        <p>{el.price} сум</p>
                        <div className={s.order__card_top_right_img}>
                          <img src={getPaymentImage(el.payment)} alt="" />
                          <img src={getDeliveryImage(el.delevery)} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className={s.order__content}>
                      <div className={s.order__prod}>
                        <p>{el.product.num1.product1}</p>
                        <p>{el.product.num1.product2}</p>
                        <p>{el.product.num1.product3}</p>
                      </div>
                      <div className={s.order__time}>
                        <p>{el.time}</p>
                      </div>
                    </div>
                    <div
                      style={{ display: "flex", flexDirection: "column" }}
                      className={s.order__btns}
                    >
                      {el.comment === true && (
                        <CustomAccordion
                          key={el.id}
                          accBtn={"Коментарии(1)"}
                          accContent={"lorem"}
                          accColor={"#6E8BB7"}
                        />
                      )}
                      <Btn
                        btnBorder={"1px solid blue"}
                        btnIcon={<AcceptBtn svgFill={"blue"} />}
                        btnWidth={"100%"}
                        btnBgColor={"transparent"}
                        btnColor={"blue"}
                        btnCont={"Завершить"}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={s.order__cards_last}>
              <div className={s.order__cards_top_delever}>
                <h2>{deliveringProducts[0]?.category ?? ""}</h2>
              </div>
              {deliveringProducts.map((el) => {
                return (
                  <div key={el.id} className={s.order__card}>
                    <div className={s.order__card_top}>
                      <div className={s.order__card_top_left}>
                        <p>ID:{el.name}</p>
                      </div>
                      <div className={s.order__card_top_right}>
                        <p>{el.price} сум</p>
                        <div className={s.order__card_top_right_img}>
                          <img src={getPaymentImage(el.payment)} alt="" />
                          <img src={getDeliveryImage(el.delevery)} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className={s.order__content}>
                      <div className={s.order__prod}>
                        <p>{el.product.num1.product1}</p>
                        <p>{el.product.num1.product2}</p>
                        <p>{el.product.num1.product3}</p>
                      </div>
                      <div className={s.order__time}>
                        <p>{el.time}</p>
                      </div>
                    </div>
                    <div
                      style={{ display: "flex", flexDirection: "column" }}
                      className={s.order__btns}
                    >
                      {el.comment === true && (
                        <CustomAccordion
                          key={el.id}
                          accBtn={"Коментарии(1)"}
                          accContent={"lorem"}
                          accColor={"#6E8BB7"}
                        />
                      )}
                      <Btn
                        btnBorder={"1px solid blue"}
                        btnIcon={<AcceptBtn svgFill={"blue"} />}
                        btnWidth={"100%"}
                        btnBgColor={"transparent"}
                        btnColor={"blue"}
                        btnCont={"Готово"}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
