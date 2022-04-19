import * as React from "react";
import { useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./style.module.css";
// import { Password } from "../components/password/password";
// import { EMail } from "../components/email/email";
import { InputName } from "../components/input-name/input-name";
import { ProfileForm } from "../components/profile-form/profile-form";
import { OrderHistory } from "../pages/order-history";
import { getDataUser, setDataUser } from "../services/thunk/data-user";
// import { getToken } from "../services/thunk/get-token";
import { logout } from "../services/thunk/logout";

export const ProfilePage = ({ orderHistory }) => {
  const { user, pass } = useSelector((state) => state);
  console.log("ProfilePage", !!user.name, user.name);

  const history = useHistory();
  // console.log("ProfilePage", user, pass);
  const dispatch = useDispatch();
  const setUser = () => {
    dispatch(setDataUser(history));
  };
  React.useEffect(() => {
    // dispatch(getToken());
    // user.name && console.log("ProfilePage-useEffect");
    user.name && dispatch(getDataUser());
  }, [history]);

  const onClick = () => {
    dispatch(logout(history));
    // console.log("onClickN");
  };
  console.log("ProfilePage1", user);
  if (!user.name) {
    // console.log("Redirect");
    return <Redirect to="/login" />;
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
            to={{ pathname: `/login` }}
            onClick={onClick}
          >
            Выход
          </NavLink>
        </li>
        <li className={style.field__profile_reshape}>
          <p className={style.link_profile} onClick={setUser}>
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
