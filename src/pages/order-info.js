import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { useRouteMatch, useLocation } from "react-router-dom";
import style from "./ingredients-info.module.css";
import { OrderId } from "../pages";

export const OrderInfo = () => {
  const { data, visible } = useSelector((state) => state);
  const location = useLocation();
  const routeMatch = useRouteMatch();
  if (data.data.length === 0) {
    return (<div className={style.ingredientsInfo}></div>);
  }
  let {
    params: { id },
  } = routeMatch;
  !id && (id = location.pathname.substring(16));
  // React.useEffect(() => {});
  return (
    !visible.modal ? (
      <div className={style.ingredientsInfo}>
        <OrderId id={id} />
      </div>)
      : null
    
  );
};

OrderInfo.propTypes = {
  match: PropTypes.object,
};
