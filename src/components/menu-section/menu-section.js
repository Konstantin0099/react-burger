import { Food } from "../food/food.js";
import style from "./menu-section.module.css";

export const MenuSection = ({ data, ingredient, dataOrder }) => {
  return (
    <ul className={style.menu + " pt-6 pb-10"}>
      {data.map(
        (item, index) =>
          item.type === ingredient && (
            <Food item={item} key={item._id} dataOrder={dataOrder} />
          )
      )}
    </ul>
  );
};
