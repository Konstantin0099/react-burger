import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./food.module.css";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  TOGGLE_VISIBLE,
  OPEN_POPUP_INGREDIENTS,
} from "../../services/actions/modal";
import { useDrag, useDrop } from 'react-dnd';
import { useRef } from 'react';


export const Food = ({ item, count }) => {
  const dispatch = useDispatch();
  // const ref = useRef(null);
  const [{ opacity, getItem }, ref] = useDrag({
    type: 'items',
    item: { el: item, drag: "food"  },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
      // getItem:  monitor.didDrop()
    })
  }, []);
  
  return (
    <li
      ref={ref}
      className={style.itemMenu}
      style={{opacity: `${opacity}`}}
      // onScroll={(e) => {console.log("e=", e.terget)}}
      onClick={() =>
        {
          dispatch({ type: OPEN_POPUP_INGREDIENTS, item: item });
          dispatch({ type: TOGGLE_VISIBLE});
        }
        }
    >
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

Food.propTypes = {
  item: PropTypes.shape({
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
  }),
  count: PropTypes.number,
};
