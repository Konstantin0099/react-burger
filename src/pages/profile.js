import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
// import { InputName } from "../components/input-name/input-name";
import { ProfileForm } from "../components/profile-form/profile-form";
import { OrderHistory } from "../pages/order-history";
import { OrderInfo } from "../pages/index";
// import { OrderInfo } from "../pages/order-info";
// import { getDataUser, setDataUser } from "../services/thunk/data-user";
// import { getToken } from "../services/thunk/get-token";
import { logout } from "../services/thunk/logout";
// import { setSyntheticTrailingComments } from "typescript";

export const ProfilePage = () => {
  const { user, pass, visible } = useSelector((state) => state);
  // const { data, visible } = useSelector((state) => state);
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  const params = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    console.log("ProfilePage__useEffect");
    // user.name && dispatch(getDataUser(), getToken());
  }, []);
  const onClick = () => {
    const direction = {
      pathname: "/login",
      state: { revert: `/` },
    };
    dispatch(logout(history, direction));
  };

  console.log("ProfilePage___params>", params);
  console.log("ProfilePage___match>", match);
  console.log("ProfilePage___history>", history);
  console.log("ProfilePage___visible.list>", visible.list);
  return (
    <Router>
      <Route exact path="/profile/orders/:id" component={OrderInfo}>
      <OrderInfo />
      </Route>
      {visible.list && (
        <div className={styles.profile}>
          <Route path="/profile">
            {/* {location.pathname === match.path && ( */}
            {/* { true && ( */}

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
          </Route>
          {/* <Router> */}
          {/* <Switch> */}
          {/* )} */}
          {/* <Switch> */}
          <Switch>
            <Route exact path="/profile">
              {/* <ProfileForm name={user.name} email={user.email} pass={pass.password} /> */}
              <ProfileForm />
            </Route>
            <Route exact path="/profile/orders">
              <OrderHistory />
            </Route>
            {/* </Switch> */}
            {/* </Router> */}
          </Switch>
        </div>
      )}
    </Router>
  );
};

ProfilePage.propTypes = {
  orderHistory: PropTypes.bool,
};
