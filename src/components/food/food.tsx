import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "../../services/types/types";
import { TOGGLE_VISIBLE, OPEN_POPUP_INGREDIENTS } from "../../services/actions/modal";
import { useDrag } from "react-dnd";
import style from "./food.module.css";
import { useHistory } from "react-router-dom";
import { IItem } from "../../services/actions";
import { FC } from "react";
import { History } from "history";

export const Food: FC<{ item: IItem, count: number  }> = ({ item, count}) => {
  const dispatch = useDispatch();
  const history: History<unknown> = useHistory();

  const [{ opacity }, ref] = useDrag(
    {
      type: "items",
      item: { el: item, drag: "food" },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    },
    []
  );
  const onClick: () => void = () => {
    dispatch({ type: OPEN_POPUP_INGREDIENTS, item: item });
    dispatch({ type: TOGGLE_VISIBLE });
    history.push({ pathname: `/ingredients/${item._id}`, state: { visibleModal: true } });
  };
  return (
    <li ref={ref} className={style.itemMenu} style={{ opacity: `${opacity}` }} onClick={onClick}>
      {count !== 0 && <Counter count={count} size="default" />}
      <img className={style.img} src={item.image} alt="фото ингредиента" />
      <div className={style.price + " pt-2 pb-2"}>
        <span className="text text_type_digits-default mr-2">{item.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className="text text_type_main-default">{item.name}</h3>
    </li>
  );
};


