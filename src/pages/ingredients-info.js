import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./ingredients-info.module.css";
import { getData } from "../services/thunk/get-data";
import IngredientDetails from "../components/ingredient-details/ingredient-details";

const IngredientsInfo = ({ match }) => {
  const { data, visible } = useSelector((state) => state);
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  if (data.data.length === 0) {
    return <div className={style.ingredientsInfo}></div>;
  }
  const {
    params: { id },
  } = match;
  const itemIngredient = data.data.find((item) => item._id === id);
  return (
    !visible.modal ? (
      <div className={style.ingredientsInfo}>
        <IngredientDetails item={itemIngredient} modal={true} />
      </div>)
      : null
  );
};

IngredientsInfo.propTypes = {
  match: PropTypes.object,
};

export default IngredientsInfo;
