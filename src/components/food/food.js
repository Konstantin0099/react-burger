import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./food.module.css";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';


export const Food = ({ item,  dataOrder }) => {
    let count = dataOrder.find(el => el._id === item._id);
    return (
      <li className={style.itemMenu}>
      {count !== undefined && count.count && <Counter count={count.count} size="default" />}
        <img className={style.img} src={item.image} alt="упсс" />
        <div className={style.price + " pt-2 pb-2"}>
          <span className="text text_type_digits-default mr-2">
            {item.price}
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <h3 className="text text_type_main-default">{item.name}</h3>
      </li>
    );
  };

  Food.propTypes = {
    dataOrder: PropTypes.array,
    item: PropTypes.object
   }
  