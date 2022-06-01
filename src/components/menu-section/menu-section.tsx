import { Food } from "../food/food";
import style from "./menu-section.module.css";
import { useSelector } from "../../services/types/types";
import { FC } from "react";
import { IItem } from "../../services/actions";

export const MenuSection: FC<{ ingredient: string }> = ({ ingredient }) => {
  const { data, dataOrder } = useSelector((state) => state);
  const recountOrder = (id: string): number => {
    let countOrder = 0;
    dataOrder.forEach((element: IItem) => element._id === id && countOrder++);
    return countOrder;
  };
  return (
    <ul className={style.menu + " pt-6 pb-10"}>
      {data.data.map((item: IItem) => {
        const countOrder = recountOrder(item._id);
        return item.type === ingredient && <Food item={item} key={item._id} count={countOrder} />;
      })}
    </ul>
  );
};
