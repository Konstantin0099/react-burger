import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch,  useLocation  } from "react-router-dom";
import style from "./ingredients-info.module.css";
import { OrderId } from "../pages";
import { TOGGLE_VISIBLE_LIST, VISIBLE_LIST, DISABLED_LIST } from "../services/actions/modal";

export const OrderInfo = () => {
  const location = useLocation();
  const { data, visible } = useSelector((state) => state);
  const dispatch = useDispatch();
  const routeMatch = useRouteMatch();
  
  // !id && id = location.pathname.substring(16);
  // console.log("OrderInfo .........props=", this.props);
  let {
    params: { id },
  } = routeMatch;
  !id && (id = location.pathname.substring(16));
 console.log("OrderInfo ...........location.path.name=", !id , id, location.pathname.substring(16));
  React.useEffect(() => {
    // !visible.list && id && dispatch({ type: TOGGLE_VISIBLE_LIST });
    // id && dispatch({type: DISABLED_LIST});
    // dispatch({type: DISABLED_LIST});
    // return () => {
    //   // return dispatch({ type: DISABLED_LIST });
    // };
  }, );
  if (data.data.length === 0) {
    return <div className={style.ingredientsInfo}></div>;
  }
  console.log("OrderInfo location=", location);
  return (
    !visible.modal && (
      <div className={style.ingredientsInfo}>
        <OrderId id={id} />
      </div>
    )
  );
};

OrderInfo.propTypes = {
  match: PropTypes.object,
};
