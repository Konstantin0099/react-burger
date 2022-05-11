import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
import { ProfileForm } from "../components/profile-form/profile-form";
import { OrderHistory } from "../pages/order-history";
import { OrderInfo } from "../pages/index";
import { logout } from "../services/thunk/logout";
import { TOGGLE_VISIBLE_LIST, DISABLED_LIST, VISIBLE_LIST } from "../services/actions/modal";

export const ProfilePage = () => {
  const { visible } = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();
  React.useEffect(() => {
    // visible.list && dispatch({ type: TOGGLE_VISIBLE_LIST });
    dispatch({ type: VISIBLE_LIST });
    return () => { 
      console.log(".............return  ProfilePage DISABLED_LIST ");
      dispatch({ type: DISABLED_LIST });
    }
  }, [dispatch]);
  const onClick = () => {
    const direction = {
      pathname: "/login",
      state: { revert: `/` },
    };
    dispatch(logout(history, direction));
  };
  console.log("ProfilePage visible.list= !visible.modal=", visible.list, !visible.modal);
  console.log("ProfilePage history=", history);
  return (
    <Router> 
      {visible.list && !visible.modal && (
        <Route path="/profile">
          <div className={styles.profile}>
            <ul className={styles.menu + " pr-15 "}>
              <li className={styles.field__profile} key={1}>
                <NavLink
                  exact
                  className={styles.link_profile + " text text_type_main-medium"}
                  activeClassName={styles.link_active}
                  to={{ pathname: `/profile` }}
                >
                  Профиль
                </NavLink>
              </li>
              <li className={styles.field__profile} key={2}>
                <NavLink
                  exact
                  className={styles.link_profile + " text text_type_main-medium"}
                  activeClassName={styles.link_active}
                  to={{ pathname: `/profile/orders` }}
                >
                  История заказов
                </NavLink>
              </li>
              <li className={styles.field__profile} key={3}>
                <NavLink className={styles.link_profile + " text text_type_main-medium"} to={"#"} onClick={onClick}>
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
              <Route path="/profile/orders">
                <OrderHistory />
              </Route>
              <Route exact path="/profile">
                <ProfileForm />
              </Route>
            </Switch>
          </div>
        </Route>
      )} 
      {/* <Route exact path="/profile/orders/:id" component={OrderInfo}></Route> */}
    </Router>
  );
};

ProfilePage.propTypes = {
  orderHistory: PropTypes.bool,
};
