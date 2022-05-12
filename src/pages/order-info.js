import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import style from "./ingredients-info.module.css";
import { OrderId } from "../pages";
import { TOGGLE_VISIBLE_LIST } from "../services/actions/modal";

export const OrderInfo = () => {
  const { data, visible } = useSelector((state) => state);
  const dispatch = useDispatch();
  const routeMatch = useRouteMatch();

  const {
    params: { id },
  } = routeMatch;
  React.useEffect(() => {
    !visible.list && id && dispatch({ type: TOGGLE_VISIBLE_LIST });
    return () => {
      return dispatch({ type: TOGGLE_VISIBLE_LIST });
    };
  }, [visible.list, id, dispatch]);
  if (data.data.length === 0) {
    return <div className={style.ingredientsInfo}></div>;
  }
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
