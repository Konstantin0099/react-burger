import React, { FC } from "react";
import { useDispatch } from "react-redux";
import style from "./ingredients-info.module.css";
import { getData } from "../services/thunk/get-data";
import IngredientDetails from "../components/ingredient-details/ingredient-details";
import { useSelector, TMatch } from "../services/types/types";
import { IItem } from "../services/actions";

// type TMatch = {
//   isExact: boolean;
//   params: { id: string };
//   path: string;
//   url: string;
// };

const IngredientsInfo: FC<{ match: TMatch }> = ({ match }) => {
  // console.log("match", match);
  const { data, visible } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("IngredientsInfo");

  React.useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  if (data.data.length === 0) {
    return <div className={style.ingredientsInfo}></div>;
  }
  const {
    params: { id },
  } = match;
  const itemIngredient = data.data.find((item: IItem) => item._id === id);
  console.log("itemIngredient", itemIngredient);
  return !visible.modal && itemIngredient ? (
    <div className={style.ingredientsInfo}>
      <IngredientDetails item={itemIngredient} modal={false} />
    </div>
  ) : null;
};

export default IngredientsInfo;
