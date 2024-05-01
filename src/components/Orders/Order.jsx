import React, { useEffect, useState } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import Header from "../Header/Header";
import { applyDrag } from "./utils";
import s from "./Orders.module.scss";
import CloseBtn from "../svg/CloseBtn";
import AcceptBtn from "../svg/Done";
import CustomInput from "../Input/Input";
import { ChevronDownIcon, Search2Icon, TimeIcon } from "@chakra-ui/icons";
import CustomMenu from "../Menu/CustomMenu";
import Payme from "../../assets/img/payme.png";
import uzumPay from "../../assets/img/uzumPay.png";
import cash from "../../assets/img/cash.png";
import card from "../../assets/img/card.png";
import delev from "../../assets/img/delev.png";
import self from "../../assets/img/self.png";
import Btn from "../Btn/Btn";
import MenuSvg from "../svg/MenuSvg";
import Done from "../svg/Done";

const Cards = () => {
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

  const [orders, setOrders] = useState({
    Новый: [
      {
        id: 1,
        name: "321540",
        price: 300560,
        category: "новые",
        payment: "payme",
        delevery: "self-call",
        product: {
          num1: {
            product1: "3x Пепси 0,5",
            product2: "1x Гамбургер",
            product3: "Лаваш мясной Standart острый",
          },
        },
        time: "15:22",
      },
      {
        id: 2,
        name: "321541",
        price: 300560,
        category: "новые",
        payment: "uzumPay",
        delevery: "self-call",
        product: {
          num1: {
            product1: "3x Пепси 0,5",
            product2: "1x Гамбургер",
            product3: "Лаваш мясной Standart острый",
          },
        },
        time: "15:22",
      },
      {
        id: 3,
        name: "321542",
        price: 300560,
        category: "новые",
        payment: "payme",
        delevery: "self-call",
        product: {
          num1: {
            product1: "3x Пепси 0,5",
            product2: "1x Гамбургер",
            product3: "Лаваш мясной Standart острый",
          },
        },
        time: "15:22",
      },
      {
        id: 4,
        name: "321543",
        price: 300560,
        category: "новые",
        payment: "cash",
        delevery: "dele",
        product: {
          num1: {
            product1: "3x Пепси 0,5",
            product2: "1x Гамбургер",
            product3: "Лаваш мясной Standart острый",
          },
        },
        time: "15:22",
      },
      {
        id: 5,
        name: "321544",
        price: 300560,
        category: "новые",
        payment: "payme",
        delevery: "self-call",
        product: {
          num1: {
            product1: "3x Пепси 0,5",
            product2: "1x Гамбургер",
            product3: "Лаваш мясной Standart острый",
          },
        },
        time: "15:22",
      },
    ],
    Заготовка: [
      {
        id: 6,
        name: "321530",
        price: 300560,
        category: "заготовка",
        payment: "payme",
        delevery: "self-call",
        comment: true,
        product: {
          num1: {
            product1: "1xГамбургер С сыром Без лука",
          },
        },
        time: "15:22",
      },
      {
        id: 7,
        name: "321531",
        price: 300560,
        category: "новые",
        payment: "payme",
        delevery: "self-call",
        comment: false,
        product: {
          num1: {
            product1: "3x Пепси 0,5",
            product2: "1x Гамбургер",
            product3: "Лаваш мясной Standart острый",
          },
        },
        time: "15:22",
      },
      {
        id: 8,
        name: "321532",
        price: 300560,
        category: "новые",
        payment: "payme",
        delevery: "self-call",
        comment: false,
        product: {
          num1: {
            product1: "3x Пепси 0,5",
            product2: "1x Гамбургер",
            product3: "Лаваш мясной Standart острый",
          },
        },
        time: "15:22",
      },
    ],
    Готов: [
      {
        id: 9,
        name: "321520",
        price: 300560,
        category: "готов",
        payment: "payme",
        delevery: "self-call",
        product: {
          num1: {
            product1: "3x Big Gamburger",
            product2: "1x Гамбургер",
            product3: "Лаваш мясной Standart острый",
          },
        },
        time: "15:22",
      },
      {
        id: 10,
        name: "321521",
        price: 300560,
        category: "готов",
        payment: "payme",
        delevery: "self-call",
        product: {
          num1: {
            product1: "3x Big Gamburger",
            product2: "1x Гамбургер",
            product3: "Лаваш мясной Standart острый",
          },
        },
        time: "15:22",
      },
      {
        id: 11,
        name: "321522",
        price: 300560,
        category: "готов",
        payment: "payme",
        delevery: "self-call",
        product: {
          num1: {
            product1: "3x Big Gamburger",
            product2: "1x Гамбургер",
            product3: "Лаваш мясной Standart острый",
          },
        },
        time: "15:22",
      },
      {
        id: 12,
        name: "321523",
        price: 300560,
        category: "готов",
        payment: "payme",
        delevery: "self-call",
        product: {
          num1: {
            product1: "3x Big Gamburger",
            product2: "1x Гамбургер",
            product3: "Лаваш мясной Standart острый",
          },
        },
        time: "15:22",
      },
      {
        id: 13,
        name: "321524",
        price: 300560,
        category: "готов",
        payment: "payme",
        delevery: "self-call",
        product: {
          num1: {
            product1: "3x Big Gamburger",
            product2: "1x Гамбургер",
            product3: "Лаваш мясной Standart острый",
          },
        },
        time: "15:22",
      },
    ],
    "Курьер в пути": [
      {
        id: 14,
        name: "321560",
        price: 300560,
        category: "Курьер в пути",
        payment: "payme",
        delevery: "self-call",
        product: {
          num1: {
            product1: "3x Big Gamburger",
            product2: "1x Гамбургер",
            product3: "Лаваш мясной Standart острый",
          },
        },
        time: "15:22",
      },
    ],
  });
  console.log(orders);

  const [searchId, setSearchId] = useState("");
  const handleSearchInputChange = (e) => {
    setSearchId(e.target.value);
  };
  const filteredOrders = Object.values(orders).flatMap((ordersInCategory) =>
    ordersInCategory.filter((order) =>
      order.name.toLowerCase().includes(searchId.toLowerCase())
    )
  );

  const resetSearch = () => {
    setSearchId("");
  };

  const getDeliveryImage = (deliveryMethod) => {
    switch (deliveryMethod) {
      case "dele":
        return delev;
      case "self-call":
        return self;
      default:
        return null;
    }
  };

  const TimeDisplay = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
      const interval = setInterval(() => {
        const currentTime = new Date();
        const hours = currentTime.getHours().toString().padStart(2, "0");
        const minutes = currentTime.getMinutes().toString().padStart(2, "0");
        setTime(`${hours}:${minutes}`);
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    return <p>{time}</p>;
  };

  const [scene, setScene] = useState({
    type: "container",
    props: {
      orientation: "horizontal",
    },
    children: Object.keys(orders).map((categoryKey, index) => ({
      id: `column${index}`,
      type: "container",
      name: categoryKey,
      props: {
        orientation: "vertical",
        className: "card-container",
      },
      children: orders[categoryKey].map((order) => ({
        type: "draggable",
        id: `order${order.id}`,
        props: {
          className: "card",
        },
        data: order,
      })),
    })),
  });

  const getCardPayload = (columnId, index) => {
    return scene.children.find((column) => column.id === columnId).children[
      index
    ];
  };

  const onColumnDrop = (dropResult) => {
    const newScene = { ...scene };
    newScene.children = applyDrag(newScene.children, dropResult);
    setScene(newScene);
  };

  const onCardDrop = (columnId, dropResult) => {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      const newScene = { ...scene };
      const columnIndex = newScene.children.findIndex(
        (column) => column.id === columnId
      );
      const newColumn = { ...newScene.children[columnIndex] };
      newColumn.children = applyDrag(newColumn.children, dropResult);
      newScene.children.splice(columnIndex, 1, newColumn);
      setScene(newScene);
    }
  };

  const moveOrderToNextColumn = (order, currentCategory) => {
    try {
      const currentOrders = [...orders[currentCategory]];
      const orderIndex = currentOrders.findIndex((o) => o.id === order.id);

      const categoryKeys = Object.keys(orders);
      const currentCategoryIndex = categoryKeys.findIndex(
        (key) => key === currentCategory
      );
      const nextCategoryIndex =
        currentCategoryIndex < categoryKeys.length - 1
          ? currentCategoryIndex + 1
          : currentCategoryIndex;
      const nextCategory = categoryKeys[nextCategoryIndex];

      console.log("Текущая категория:", currentCategory);
      console.log("Следующая категория:", nextCategory);

      const updatedOrders = { ...orders };
      updatedOrders[currentCategory] = currentOrders.filter(
        (o) => o.id !== order.id
      );

      const isOrderExistsInNextColumn = updatedOrders[nextCategory].some(
        (o) => o.id === order.id
      );
      console.log(
        "Заказ уже есть в следующем столбце:",
        isOrderExistsInNextColumn
      );

      if (!isOrderExistsInNextColumn) {
        updatedOrders[nextCategory] = [...updatedOrders[nextCategory], order];
      }

      setOrders(updatedOrders);

      console.log("Успешно перемещено");

      setScene((prevScene) => {
        const updatedScene = { ...prevScene };
        const columnIndex = updatedScene.children.findIndex(
          (column) => column.name === currentCategory
        );
        updatedScene.children[columnIndex].children = updatedScene.children[
          columnIndex
        ].children.filter((o) => o.id !== `order${order.id}`);
        if (!isOrderExistsInNextColumn) {
          const nextColumnIndex = columnIndex + 1;
          updatedScene.children[nextColumnIndex].children.push({
            type: "draggable",
            id: `order${order.id}`,
            props: {
              className: "card",
            },
            data: order,
          });
        }
        return updatedScene;
      });
    } catch (error) {
      console.log("Не удалось переместить");
    }
  };
  const removeOrder = (orderId, currentCategory) => {
    setOrders((prevOrders) => {
      const updatedOrders = { ...prevOrders };
      updatedOrders[currentCategory] = updatedOrders[currentCategory].filter(
        (order) => order.id !== orderId
      );
      return updatedOrders;
    });
  };
  const totalProducts = Object.keys(orders).reduce(
    (total, key) => total + orders[key].length,
    0
  );

  return (
    <>
      <Header title={"Cегодняшние заказы"} />
      <div className={s.order__top}>
        <CustomInput
          width={"100%"}
          icon={<Search2Icon style={{ color: "#0E73F6" }} />}
          text={"Поиск по ID"}
          value={searchId}
          onChange={handleSearchInputChange}
        />
        <div className={s.order__topp}>
          <CustomMenu
            MenuBtnControl={"order__control"}
            MenuBtnWidth={"20px"}
            MenuSvg={<MenuSvg />}
            MenuSvg2={<ChevronDownIcon />}
            MenuControl={"order__menu"}
            MenuBtn={
              <p>
                Всего:
                {totalProducts}
              </p>
            }
            MenuIt={"efwjek"}
          />
          <div className="order__menu">
            <TimeIcon color={"#6E8BB7"} />
            <TimeDisplay />
          </div>
        </div>
      </div>
      {searchId === "" ? (
        <div className="card-scene">
          <Container
            orientation="horizontal"
            onDrop={onColumnDrop}
            dragHandleSelector=".column-drag-handle"
            dropPlaceholder={{
              animationDuration: 150,
              showOnTop: true,
              className: "cards-drop-preview",
            }}
          >
            {scene.children.map((column) => (
              <Draggable key={column.id}>
                <div className={s.order__cards}>
                  <div className={s.order__cards_top_ready}>{column.name}</div>
                  <Container
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                    groupName="col"
                    getChildPayload={(index) =>
                      getCardPayload(column.id, index)
                    }
                    onDrop={(dropResult) => onCardDrop(column.id, dropResult)}
                  >
                    {column.children.map((order) => (
                      <Draggable key={order.id}>
                        <div className={s.order__card}>
                          <div className={s.order__card_top}>
                            <div className={s.order__card_top_left}>
                              <p>ID: {order.data.name}</p>
                            </div>
                            <div className={s.order__card_top_right}>
                              <p>{order.data.price} сум</p>
                              <div className={s.order__card_top_right_img}>
                                <img
                                  src={getPaymentImage(order.data.payment)}
                                  alt=""
                                />
                                <img
                                  src={getDeliveryImage(order.data.delevery)}
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className={s.order__content}>
                            <div className={s.order__prod}>
                              <p>{order.data.product.num1.product1}</p>
                              <p>{order.data.product.num1.product2}</p>
                              <p>{order.data.product.num1.product3}</p>
                            </div>
                            <div className={s.order__time}>
                              <p>{order.data.time}</p>
                            </div>
                          </div>
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                            className={s.order__btns}
                          >
                            {column.name === "Новый" && (
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <Btn
                                  btnBorder={"1px solid red"}
                                  btnWidth={"120px"}
                                  btnBgColor={"transparent"}
                                  btnColor={"red"}
                                  btnCont={"Отменить"}
                                  btnIcon={<CloseBtn />}
                                  onClick={() =>
                                    removeOrder(order.id, order.category)
                                  }
                                />
                                <Btn
                                  btnWidth={"120px"}
                                  btnBgColor={"blue"}
                                  btnColor={"white"}
                                  btnCont={"Принять"}
                                  btnIcon={<AcceptBtn svgFill={"white"} />}
                                  Onclick={() =>
                                    moveOrderToNextColumn(
                                      order.data,
                                      column.name
                                    )
                                  }
                                />
                              </div>
                            )}
                            {column.name === "Заготовка" && (
                              <Btn
                                btnBorder={"1px solid blue"}
                                btnWidth={"100%"}
                                btnBgColor={"transparent"}
                                btnColor={"blue"}
                                btnCont={"Готово"}
                                btnIcon={<AcceptBtn svgFill={"blue"} />}
                                Onclick={() =>
                                  moveOrderToNextColumn(order.data, column.name)
                                }
                              />
                            )}
                            {column.name === "Готов" && (
                              <Btn
                                btnBorder={"1px solid blue"}
                                btnWidth={"100%"}
                                btnBgColor={"transparent"}
                                btnColor={"blue"}
                                btnCont={"Завершить"}
                                Onclick={() =>
                                  moveOrderToNextColumn(order.data, column.name)
                                }
                              />
                            )}
                          </div>
                        </div>
                      </Draggable>
                    ))}
                  </Container>
                </div>
              </Draggable>
            ))}
          </Container>
        </div>
      ) : (
        <div>
          {filteredOrders.length > 0 ? (
            <div>
              <h2>Найденные заказы:</h2>
              <ul>
                {filteredOrders.map((order) => (
                  <div className={s.order__card}>
                    <div className={s.order__card_top}>
                      <div className={s.order__card_top_left}>
                        <p>ID: {order.name}</p>
                      </div>
                      <div className={s.order__card_top_right}>
                        <p>{order.price} сум</p>
                        <div className={s.order__card_top_right_img}>
                          <img src={getPaymentImage(order.payment)} alt="" />
                          <img src={getDeliveryImage(order.delevery)} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className={s.order__content}>
                      <div className={s.order__prod}>
                        <p>{order.product.num1.product1}</p>
                        <p>{order.product.num1.product2}</p>
                        <p>{order.product.num1.product3}</p>
                      </div>
                      <div className={s.order__time}>
                        <p>{order.time}</p>
                      </div>
                    </div>
                    <div
                      style={{ display: "flex", flexDirection: "column" }}
                      className={s.order__btns}
                    >
                      {order.name === "Новый" && (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Btn
                            btnBorder={"1px solid red"}
                            btnWidth={"120px"}
                            btnBgColor={"transparent"}
                            btnColor={"red"}
                            btnCont={"Отменить"}
                            btnIcon={<CloseBtn />}
                            onClick={() => moveOrderToNextColumn(order.data)}
                          />
                          <Btn
                            btnWidth={"120px"}
                            btnBgColor={"blue"}
                            btnColor={"white"}
                            btnCont={"Принять"}
                            btnIcon={<AcceptBtn svgFill={"white"} />}
                            onClick={() =>
                              moveOrderToNextColumn(order.data, column.name)
                            }
                          />
                        </div>
                      )}
                      {order.name === "Заготовка" && (
                        <Btn
                          btnBorder={"1px solid blue"}
                          btnWidth={"100%"}
                          btnBgColor={"transparent"}
                          btnColor={"blue"}
                          btnCont={"Готово"}
                          btnIcon={<AcceptBtn svgFill={"blue"} />}
                          onClick={() =>
                            moveOrderToNextColumn(order.data, column.name)
                          }
                        />
                      )}
                      {order.name === "Готов" && (
                        <Btn
                          btnBorder={"1px solid blue"}
                          btnWidth={"100%"}
                          btnBgColor={"transparent"}
                          btnColor={"blue"}
                          btnCont={"Завершить"}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </ul>
              <button onClick={resetSearch}>Сбросить поиск</button>
            </div>
          ) : (
            <img
              src="https://habrastorage.org/getpro/habr/upload_files/bcc/6f9/0a1/bcc6f90a1e7d665fc16d4163e7f4d426.gif"
              alt=""
            />
          )}
        </div>
      )}
    </>
  );
};

export default Cards;
