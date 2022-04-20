// import PropTypes from "prop-types";
import React from "react";
// import ReactDOM from "react-dom";
import { Link, useHistory,  useLocation } from "react-router-dom";
import IngredientDetails from "../components/ingredient-details/ingredient-details";
import { useDispatch, useSelector } from "react-redux";
import { c } from "../utils/console";
import style from "./ingredients-info.module.css";
import { getData } from "../services/thunk/get-data";

const IngredientsInfo = ({match, location}) => {
  const { data } = useSelector((state) => state);
  const dispatch = useDispatch();
  // const { openPopup } = useSelector((state) => state);
  React.useEffect(() => {
    dispatch(getData());
  }, [] );
  // console.log("IngredientsInfo", data, data.data.length);
  const {
    params: { id }
  } = match;
  // c("IngredientsInfo", id, match, data.data, itemIngredient);
  if (data.data.length === 0) {
  return (
    <div className={style.ingredientsInfo}>

    </div> 
)}
  const itemIngredient = data.data.find(item => item._id === id);
  return (
    <div className={style.ingredientsInfo}>
      <IngredientDetails item={itemIngredient} modal={true}/>
    </div> 
  );
};

// ModalOverlay.propTypes = {
//   children: PropTypes.object,
//   toggleVisible: PropTypes.func,
//   onClose: PropTypes.func,
// };

export default IngredientsInfo;

// const initalStateOpenPopup = {
//   popup: {},
//   item: {},
// };