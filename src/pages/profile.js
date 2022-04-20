import * as React from "react";
import { useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";
import { InputName } from "../components/input-name/input-name";
import { ProfileForm } from "../components/profile-form/profile-form";
import { OrderHistory } from "../pages/order-history";
import { getDataUser, setDataUser } from "../services/thunk/data-user";
import { logout } from "../services/thunk/logout";

export const ProfilePage = ({ orderHistory }) => {
  const { user, pass } = useSelector((state) => state);
  // console.log("ProfilePage", !!user.name, user.name);
  const history = useHistory();
  // console.log("ProfilePage", user, pass);
  const dispatch = useDispatch();
  // const setUser = () => {
  //   dispatch(setDataUser(history));
  // };
  React.useEffect(() => {
    user.name && dispatch(getDataUser());
  }, [history]);
  let direction = {
    pathname: "/login",
    state: { revert: `/profile` },
  };
  const onClick = () => {
    direction = {
      pathname: "/login",
      state: { revert: `/` },
    };
    dispatch(logout(history, direction));
  };
  if (!user.name) {
    // console.log("Redirect ProfilePage");
    return <Redirect to={direction} />;
  }
  // console.log("state=", user, pass);
  return (
    <div className={style.profile}>
      <ul className={style.menu + " pr-15"}>
        <li className={style.field__profile}>
          <NavLink
            exact
            className={style.link_profile}
            activeClassName={style.link_active}
            to={{ pathname: `/profile` }}
          >
            Профиль
          </NavLink>
        </li>
        <li className={style.field__profile}>
          <NavLink
            exact
            className={style.link_profile}
            activeClassName={style.link_active}
            to={{ pathname: `/profile/orders` }}
          >
            История заказов
          </NavLink>
        </li>
        <li className={style.field__profile}>
          <NavLink
            className={style.link_profile}
            to={direction}
            onClick={onClick}
          >
            Выход
          </NavLink>
        </li>
        <li className={style.field__profile_reshape}>
          <p className={style.link_profile}>
            В этом разделе вы можете изменить свои персональные данные
          </p>
        </li>
      </ul>
      {!orderHistory ? (
        <ProfileForm user={user} pass={pass} />
      ) : (
        <OrderHistory />
      )}
    </div>
  );
};
