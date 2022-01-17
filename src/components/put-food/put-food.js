
import {Food} from "../food/food.js";
import style from "./put-food.module.css";

export const PutFood = ({ data, ingredient }) => {
    return (
      <ul className={style.menu + " pt-6 pb-10"}>
        {data.map(
          (item, index) =>
            item.type === ingredient && <Food item={item} key={index} />
        )}
      </ul>
    );
  };
