import React from "react";
import ReactDOM from "react-dom";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { data, dataOrder } from "../../utils/data.js";
import styleConstructor from "./burger-constructor.module.css";

const Lists = ({ data, dataOrder }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "flex-end",
        marginBottom: "40px",
      }}
    >
      <ul className={styleConstructor.order}>
        {dataOrder.map(
          (item, index) =>
            item.type === "bun" && (
              <li
                className={styleConstructor.ingredient + " pl-8 mb-2"}
                key={index}
              >
                <ConstructorElement
                  type="top"
                  isLocked={true}
                  text={item.name + "верх"}
                  price={item.price / 2}
                  thumbnail={item.image}
                />
              </li>
            )
        )}

        <ul className={styleConstructor.ingredients}>
          {data.map(
            (item, index) =>
            item.type !== "bun" && (
                <li
                  className={styleConstructor.ingredient + " mt-2 mb-2"}
                  key={index}
                >
                  <DragIcon />
                  <ConstructorElement
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image}
                  />
                </li>
              )
          )}
        </ul>

        {dataOrder.map(
          (item, index) =>
            item.type === "bun" && (
              <li
                className={styleConstructor.ingredient + " pl-8 mt-3"}
                key={index}
              >
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={item.name + "низ"}
                  price={item.price / 2}
                  thumbnail={item.image}
                />
              </li>
            )
        )}
      </ul>
    </div>
  );
};

const Constructor = () => {
  return <Lists data={data} dataOrder={dataOrder} />;
};
const Number = ({ n }) => {
  return <span className="text text_type_digits-default">{n}</span>;
};

const PlaceOrder = () => {
  return (
    <div className={styleConstructor.placeOrder}>
      <span className={styleConstructor.placeOrder1}>
        <Number n="77777" />
        <CurrencyIcon type="primary" />
      </span>
      <Button type="primary" size="large">
        Оформить заказ
      </Button>
    </div>
  );
};

export default class BurgerConstructor extends React.Component {
  render() {
    return (
      <section
        className={
          styleConstructor.burgerConstructor +
          " pt-25 pl-4 pr-4 ml-5 mr-0 mt-0 mb-0"
        }
      >
        <Constructor />
        <PlaceOrder />
      </section>
    );
  }
}
