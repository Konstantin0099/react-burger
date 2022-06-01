import { useRouteMatch, useLocation } from "react-router-dom";
import { FC } from "react";
import style from "./ingredients-info.module.css";
import { OrderId } from "../../src/pages/index";
import { useSelector, TMatch, TLocation } from "../services/types/types";

export const OrderInfo: FC = () => {
  const {
    data: {
      data: { length },
    },
    visible: { modal },
  } = useSelector((state) => state);
  const location: TLocation = useLocation();
  const routeMatch: TMatch = useRouteMatch();

  if (length === 0) {
    return <div className={style.ingredientsInfo}></div>;
  }
  let {
    params: { id },
  } = routeMatch;
  !id && (id = location.pathname.substring(16));

  return !modal ? (
    <div className={style.ingredientsInfo}>
      <OrderId id={id} />
    </div>
  ) : null;
};
