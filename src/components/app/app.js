import style from "./app.module.css";
import * as React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect,  useHistory } from "react-router-dom";
import AppHeader from "../app-header/app-header.js";
import {ProtectedRoute} from "../../components/protected-route/protected-route";
import {
  Login,
  Overlay,
  RegisterPage,
  ForgotPassword,
  ResetPassword,
  ProfilePage,
  OrderFeed
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

const App = () => {
  const { visible, user, data } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  // console.log("App user", user);
  React.useEffect(() => {
    // dispatch(getToken());
    dispatch(getDataUser());
    // dispatch(getData());
    console.log("App useEffect", data);
  },[]);
  //   const docu = document.querySelector('#root');
  //  const inputError = docu.querySelectorAll("input__error");
  //     console.log(docu, inputError);
  // dispatch(getData());
  // console.log("App", data);
  return (
    <Router>
      <div className={style.app}>
        <AppHeader />
        {visible && (
          <Modal
            toggleVisible={() => dispatch({ type: TOGGLE_VISIBLE })}
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
            <Route path="/profile/orders" exact>
              <ProfilePage orderHistory={true}/>
              {/* <OrderHistory></OrderHistory> */}
            </Route>
            <ProtectedRoute path="/profile/orders/:id" exact>
              {/* <OrderInfo></OrderInfo> */}
            </ProtectedRoute>

            <Route path="/ingredients/:id" exact component={IngredientsInfo}>
            </Route>

            <Route path="/order-feed" exact>
              <OrderFeed></OrderFeed>
              {/* <TotalOrder></TotalOrder> */}
            </Route>
            <Route path="/order-feed/:id" exact>
              {/* <OrderInfo></OrderInfo> */}
            </Route>

            <Route path="/" exact>
              <main className={style.main}>
                <BurgerIngredients />
                <BurgerConstructor />
              </main>
            </Route>
            <Route>
              <Overlay>Упсс....404</Overlay>
            </Route>
          </Switch>
        </DndProvider>
      </div>
      {/* <Redirect to="/" /> */}
    </Router>
  );
};
export default App;
