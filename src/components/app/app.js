import style from "./app.module.css";
import * as React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import AppHeader from "../app-header/app-header.js";

import { ProtectedRoute } from "../../components/protected-route/protected-route";
import {
  Login,
  RegisterPage,
  ForgotPassword,
  ResetPassword,
  ProfilePage,
  OrderFeed,
  OrderInfo,
} from "../../pages/index";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.js";
import BurgerConstructor from "../burger-constructor/burger-constructor.js";
import IngredientsInfo from "../../pages/ingredients-info";
import Modal from "../modal/modal.js";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_VISIBLE, TOGGLE_VISIBLE_LIST, VISIBLE_LIST } from "../../services/actions/modal";
import { CLOSE_POPUP_ORDER } from "../../services/actions/modal";

import { getData } from "../../services/thunk/get-data";

const App = () => {
  const { visible } = useSelector((state) => state);
  let to = {};
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  const toggleVisible = (history, location) => {
    // console.log("App toggleVisible history=  location=", history, location);
    // history.location.pathname.indexOf("feed") !== -1
    // if (visible.modal) {
      // location.pathname.indexOf("feed") !== -1 ? (to = { pathname: "/feed" }) : (to = { pathname: "/profile/orders" });
      // <Redirect to={to} />
      // console.log("App toggleVisible visible=", visible);
      // history.goBack();
      // history.push(visible.pathname);
      // history.push(location.pathname);
      history.replace(visible.pathname);
    // } else {
    //   console.log("toggleVisible else history=", history);
    // }
    // ? history.replace({ pathname: "/feed" })
    // : history.replace({ pathname: "/profile/orders" });
    dispatch({ type: TOGGLE_VISIBLE });
    dispatch({ type: VISIBLE_LIST });
  };
  return (
    <Router>
      <div className={style.app}>
        <AppHeader />
        {visible.modal && (
          <Modal toggleVisible={toggleVisible} onClose={() => dispatch({ type: CLOSE_POPUP_ORDER })}></Modal>
        )}
        <DndProvider backend={HTML5Backend}>
          <Switch>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/register" exact>
              <RegisterPage />
            </Route>
            <Route path="/forgot-password" exact>
              <ForgotPassword />
            </Route>
            <Route path="/reset-password" exact>
              <ResetPassword />
            </Route>
            <ProtectedRoute path="/profile/orders/:id">
              <OrderInfo/>
            </ProtectedRoute>
            <ProtectedRoute path={["/profile", "/profile/orders" ]}>
              <ProfilePage />
            </ProtectedRoute>
            <Route path="/ingredients/:id" exact component={IngredientsInfo}></Route>
            <Route path="/feed" exact>
              <OrderFeed />
            </Route>

            <Route path="/feed/:id" exact component={OrderInfo}></Route>
            <Route path="/" exact>
              <main className={style.main}>
                <BurgerIngredients />
                <BurgerConstructor />
              </main>
            </Route>
            <Route>
              <h1>Упсс....404</h1>
            </Route>
          </Switch>
        </DndProvider>
      </div>
    </Router>
  );
};
export default App;
