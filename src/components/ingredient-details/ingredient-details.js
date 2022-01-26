// import { Food } from "../food/food.js";
import style from "./ingredient-details.module.css";

const IngredientDetails = (props) => {
  const { name, proteins, calories, carbohydrates, fat, image } = props.item;
  console.log("IngredientDetails-props", props.item, name);

  return (
    <div className={style.order}>
      <p className={style.title + " text text_type_digits-medium pt-10"}>
        Детали ингредиента
      </p>
      <div className={style.content}>
        <img className={style.img} src={image} alt="булка" />
        <p className="text text_type_digits-default pt-4">{name}</p>
        <div className={style.nutritionalProperties + " pt-8 pb-15"}>
          <p className={style.property + " text text_type_digits-small"}>
            <span>Калории,ккал</span><span>{calories}</span>
          </p>
          <p className={style.property + " text text_type_digits-small"}>
          <span>Белки, г</span><span>{proteins}</span>
            {/* Белки, г {"  = " + proteins} */}
          </p>
          <p className={style.property + " text text_type_digits-small"}>
          <span>Жиры, г</span><span>{fat}</span>
          </p>
          <p className={style.property + " text text_type_digits-small"}>
          <span> Углеводы, г</span><span>{carbohydrates}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default IngredientDetails;
