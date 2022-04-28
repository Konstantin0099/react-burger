import style from "./app.module.css";
import * as React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect,  useHistory } from "react-router-dom";
import AppHeader from "../app-header/app-header.js";
// import { Dev } from "../dev/dev.js";
import {ProtectedRoute} from "../../components/protected-route/protected-route";
import {
  Login,
  RegisterPage,
  ForgotPassword,
  ResetPassword,
  ProfilePage,
  OrderFeed,
  OrderId
} from "../../pages/index";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.js";
import BurgerConstructor from "../burger-constructor/burger-constructor.js";
import IngredientsInfo from "../../pages/ingredients-info";
import Modal from "../modal/modal.js";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_VISIBLE } from "../../services/actions/modal";
import { CLOSE_POPUP_ORDER } from "../../services/actions/modal";
import { getDataUser } from "../../services/thunk/data-user";
import { getData } from "../../services/thunk/get-data";
import { getToken } from "../../services/thunk/get-token";

const App = () => {
  const { visible, user, data } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const toggleVisible = (history) => {
    visible && history.replace({ pathname: '/'});
    dispatch({ type: TOGGLE_VISIBLE })
  }

  return (
    <Router>
      <div className={style.app}>
        <AppHeader />
        {/* <Dev /> */}
        {visible && (
          <Modal
            toggleVisible={toggleVisible}
            onClose={() => dispatch({ type: CLOSE_POPUP_ORDER })}
          ></Modal>
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
            <ProtectedRoute path="/profile" exact>
              <ProfilePage />
            </ProtectedRoute>
            {/* <ProtectedRoute path="/profile/orders" exact>
              <ProfilePage/>
            </ProtectedRoute> */}
            {/* <ProtectedRoute path="/profile/orders/:id" exact> */}
              {/* <OrderInfo></OrderInfo> */}
            {/* </ProtectedRoute> */}

            <Route path="/ingredients/:id" exact component={IngredientsInfo}>
            </Route>

            <Route path="/feed" exact>
              <OrderFeed></OrderFeed>
              {/* <TotalOrder></TotalOrder> */}
            </Route>
            <Route path="/feed/:id" exact>
              <OrderId></OrderId>
            </Route>

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
      {/* <Redirect to="/" /> */}
    </Router>
  );
};
export default App;
