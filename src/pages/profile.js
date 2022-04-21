import PropTypes from "prop-types";
import * as React from "react";
import { useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";
import { InputName } from "../components/input-name/input-name";
import { ProfileForm } from "../components/profile-form/profile-form";
import { OrderHistory } from "../pages/order-history";
import { getDataUser, setDataUser } from "../services/thunk/data-user";
import { getToken } from "../services/thunk/get-token";
import { logout } from "../services/thunk/logout";

export const ProfilePage = ({ orderHistory }) => {
  const { user, pass } = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();
  React.useEffect(() => {
    user.name && dispatch(getDataUser(), getToken());
  }, [history]);
  const onClick = () => {
  const direction = {
      pathname: "/login",
      state: { revert: `/` },
    };
    dispatch(logout(history, direction));
  };
  return (
    <div className={style.profile}>
      <ul className={style.menu + " pr-15 "}>
        <li className={style.field__profile}>
          <NavLink
            exact
            className={style.link_profile + " text text_type_main-medium"}
            activeClassName={style.link_active}
            to={{ pathname: `/profile` }}
          >
            Профиль
          </NavLink>
        </li>
        <li className={style.field__profile}>
          <NavLink
            exact
            className={style.link_profile + " text text_type_main-medium"}
            activeClassName={style.link_active}
            to={{ pathname: `/profile/orders` }}
          >
            История заказов
          </NavLink>
        </li>
        <li className={style.field__profile}>
          <NavLink
            className={style.link_profile + " text text_type_main-medium"}
            to={"#"}
            onClick={onClick}
          >
            Выход
          </NavLink>
        </li>
        <li className={style.field__profile_reshape}>
          <p className={style.link + " text text_type_main-default"}>
            В этом разделе вы можете изменить свои персональные данные
          </p>
        </li>
      </ul>
      {!orderHistory ? (
        <ProfileForm name={user.name} email={user.email} pass={pass.password} />
      ) : (
        <OrderHistory />
      )}
    </div>
  );
};

ProfilePage.propTypes = {
  orderHistory: PropTypes.bool,
};