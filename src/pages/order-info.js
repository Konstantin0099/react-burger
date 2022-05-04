import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation, useRouteMatch } from "react-router-dom";
import style from "./ingredients-info.module.css";
import { getData } from "../services/thunk/get-data";
import { OrderId } from "../pages";
import { WS_CONNECTION_START } from "../wsRedux/action-types";
import { TOGGLE_VISIBLE_LIST } from "../services/actions/modal";

export const OrderInfo = (props) => {
  const {match} = props;
  console.log("OrderInfo  props", props)
  const { data, visible } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const routeMatch = useRouteMatch();
  const location = useLocation();
  console.log(history, routeMatch, location, match)
  React.useEffect(() => {
    dispatch({ type: TOGGLE_VISIBLE_LIST })
    return dispatch({ type: TOGGLE_VISIBLE_LIST })
    }, []);
    const {
      params: { id },
    } = match;
    console.log("ID=", id)
  if (data.data.length === 0) {
    return <div className={style.ingredientsInfo}></div>;
  }
  const order = data.data.find((item) => item._id === id);
  return (
    !visible.list &&
    <div className={style.ingredientsInfo}>
      <OrderId id={id} item={order} modal={true} />
    </div>
  );
};

OrderInfo.propTypes = {
  match: PropTypes.object,
};

