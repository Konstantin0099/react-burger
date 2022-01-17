import PropTypes from 'prop-types';
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styleConstructor from "./lists.module.css";


export const Lists = (props) => {
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
          {props.dataOrder.map(
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
            {props.data.map(
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
  
          {props.dataOrder.map(
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
  Lists.propTypes = {
    dataOrder: PropTypes.array,
    data: PropTypes.array
   }