import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
import { InputName } from "../components/input-name/input-name";
import { ProfileForm } from "../components/profile-form/profile-form";
import { OrderHistory } from "../pages/order-history";
import { getDataUser, setDataUser } from "../services/thunk/data-user";
import { getToken } from "../services/thunk/get-token";
import { logout } from "../services/thunk/logout";
import { setSyntheticTrailingComments } from "typescript";

export const ProfilePage = () => {
  const { user, pass } = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();
  console.log("ProfilePage", user.name, !!user.name)
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
    <Router>
      <div className={styles.profile}>
        {/* <div className={style.profile}> */}
        <ul className={styles.menu + " pr-15 "}>
          <li className={styles.field__profile}>
            <NavLink
              exact
              className={styles.link_profile + " text text_type_main-medium"}
              activeClassName={styles.link_active}
              to={{ pathname: `/profile` }}
            >
              Профиль
            </NavLink>
          </li>
          <li className={styles.field__profile}>
            <NavLink
              exact
              className={styles.link_profile + " text text_type_main-medium"}
              activeClassName={setSyntheticTrailingComments.link_active}
              to={{ pathname: `/profile/orders` }}
            >
              История заказов
            </NavLink>
          </li>
          <li className={styles.field__profile}>
            <NavLink
              className={styles.link_profile + " text text_type_main-medium"}
              to={"#"}
              onClick={onClick}
            >
              Выход
            </NavLink>
          </li>
          <li className={styles.field__profile_reshape}>
            <p className={styles.link + " text text_type_main-default"}>
              В этом разделе вы можете изменить свои персональные данные
            </p>
          </li>
        </ul>
        <Switch>
          <Route path="/profile/" exact>
            <ProfileForm
              name={user.name}
              email={user.email}
              pass={pass.password}
            />
          </Route>
          <Route path="/profile/orders" exact>
            <OrderHistory />
          </Route>
          <Route path="/profile/orders/:id" exact>
            {/* <OrderInfo/> */}
          </Route>
        </Switch>

        {/* {!orderHistory ? (
        <ProfileForm name={user.name} email={user.email} pass={pass.password} />
      ) : (
        <OrderHistory />
      )} */}
      </div>
    </Router>
  );
};

ProfilePage.propTypes = {
  orderHistory: PropTypes.bool,
};
