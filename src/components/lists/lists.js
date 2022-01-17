
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styleConstructor from "./lists.module.css";


export const Lists = ({ data, dataOrder }) => {
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