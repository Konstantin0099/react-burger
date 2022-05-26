
import React from "react";
import { useRouteMatch, useLocation } from "react-router-dom";
import style from "./ingredients-info.module.css";
import { OrderId } from ".";
import { useSelector, TMatch, TLocation } from "../services/types/types";

export const OrderInfo = () => {
  const { data: { data: { length } }, visible: { modal } } = useSelector((state) => state);
  const location: TLocation = useLocation();
  const routeMatch: TMatch = useRouteMatch();
  console.log("modal", modal)
  if (length === 0) {
    return (<div className={style.ingredientsInfo}></div>);
  }
  let {
    params: { id }
  } = routeMatch;
  !id && (id = location.pathname.substring(16));
  // React.useEffect(() => {});
  return (
    !modal ? (
      <div className={style.ingredientsInfo}>
        <OrderId id={id} />
      </div>)
      : null
    
  );
};
