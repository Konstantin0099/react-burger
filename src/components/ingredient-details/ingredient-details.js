import style from "./ingredient-details.module.css";
import { ingredientType } from "../../utils/types";
import { c } from "../../utils/console";

const IngredientDetails = (props) => {
  const { item, modal } = props;
  const { name, proteins, calories, carbohydrates, fat, image } = item;
  c("props", props, !modal, modal);
  return (
    <div className={style.order}>
      {/* <p className={style.title + " text text_type_digits-medium pt-10 "}> */}
      <p className={(!modal ? style.titleModal : style.title) + " text text_type_digits-medium pt-10 "}>
        Детали ингредиента
      </p>
      <div className={style.content}>
        <img className={style.img} src={image} alt="булка" />
        <p className={style.name + " text text_type_digits-default pt-4"}>{name}</p>
        <div className={style.nutritionalProperties + " pt-8 pb-15"}>
          <p className={style.property + " text text_type_digits-small"}>
            <span>Калории,ккал</span>
            <span className={style.value}>{calories}</span>
          </p>
          <p className={style.property + " text text_type_digits-small"}>
            <span>Белки, г</span>
            <span className={style.value}>{proteins}</span>
          </p>
          <p className={style.property + " text text_type_digits-small"}>
            <span>Жиры, г</span>
            <span className={style.value}>{fat}</span>
          </p>
          <p className={style.property + " text text_type_digits-small"}>
            <span> Углеводы, г</span>
            <span className={style.value}>{carbohydrates}</span>
          </p>
        </div>
      </div>
    </div>
  );
};




IngredientDetails.propTypes = {
  item: ingredientType.isRequired,
};

export default IngredientDetails;
