import PropTypes from "prop-types";
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
                className={styleConstructor.ingredient + " pl-8 mb-2 mr-2"}
                key={item._id}
              >
                <ConstructorElement
                  type="top"
                  isLocked={true}
                  text={item.name + " (верх)"}
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
                  key={item._id}
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
                className={styleConstructor.ingredient + " pl-8 mt-3 mr-2"}
                key={item._id}
              >
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={item.name + " (низ)"}
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
  dataOrder: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
      calories: PropTypes.number,
      type: PropTypes.string,
      price: PropTypes.number,
      carbohydrates: PropTypes.number,
      count: PropTypes.number,
      fat: PropTypes.number,
      proteins: PropTypes.number,
    })
  ),
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
      calories: PropTypes.number,
      type: PropTypes.string,
      price: PropTypes.number,
      carbohydrates: PropTypes.number,
      count: PropTypes.number,
      fat: PropTypes.number,
      proteins: PropTypes.number,
    })
  ),
};
