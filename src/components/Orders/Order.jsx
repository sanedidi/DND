import React, { useState, useEffect } from "react";
import s from "./Orders.module.scss";
import { Header } from "../Header";
import CustomInput from "../Input/Input";
import { Search2Icon } from "@chakra-ui/icons";
import CustomMenu from "../Menu/CustomMenu";
import {
  useNewApi,
  useinProgressApi,
  usedeliveringApi,
  useReadyApi,
} from "../../service/state.service";

const Order = () => {
  const [newProducts, setNewProducts] = useState([]);
  const [inProgressProducts, setInProgressProducts] = useState([]);
  const [deliveringProducts, setDeliveringProducts] = useState([]);
  const [readyProducts, setReadyProducts] = useState([]);

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
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr" }}
            className={s.order__main_cards}
          >
            <div className={s.order__cards}>
              {newProducts.map((el) => {
                return (
                  <div key={el.id} className={s.order__card}>
                    <div className={s.order__card_top}></div>

                    <h2>{el.category}</h2>
                    <p>ID:{el.name}</p>

                    <p key={el.id}>{el.description}</p>
                  </div>
                );
              })}
            </div>
            <div className={s.order__cards}>
              {inProgressProducts.map((el) => {
                return (
                  <div key={el.id} className={s.order__card}>
                    <div className={s.order__card_top}>
                      <h2>{el.category}</h2>
                    </div>
                    <p>ID:{el.name}</p>
                    <p key={el.id}>{el.description}</p>
                  </div>
                );
              })}
            </div>
            <div className={s.order__cards}>
              {deliveringProducts.map((el) => {
                return (
                  <div key={el.id} className={s.order__card}>
                    <h2>{el.category}</h2>
                    <div className={s.order__card_top}></div>
                    <p>ID:{el.name}</p>
                    <p key={el.id}>{el.description}</p>
                  </div>
                );
              })}
            </div>
            <div className={s.order__cards}>
              {readyProducts.map((el) => {
                return (
                  <div key={el.id} className={s.order__card}>
                    <div className={s.order__card_top}>
                      <h2>{el.category}</h2>
                    </div>
                    <p>ID:{el.name}</p>
                    <p key={el.id}>{el.description}</p>
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
