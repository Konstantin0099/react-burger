import style from "./app.module.css";
import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppHeader from "../app-header/app-header";
import { ProtectedRoute } from "../protected-route/protected-route";
import {
  Login,
  RegisterPage,
  ForgotPassword,
  ResetPassword,
  ProfilePage,
  OrderFeed,
  OrderInfo,
} from "../../pages/index";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import IngredientsInfo from "../../pages/ingredients-info";
import Modal from "../modal/modal";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { getData } from "../../services/thunk/get-data";
import { useDispatch, useSelector } from "../../services/types/types";


const App: FC = () => {
  const { visible } = useSelector((state) => state);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <Router>
      <div className={style.app}>
        <AppHeader />
        {visible.modal && <Modal></Modal>}
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
            <ProtectedRoute path="/profile/orders/:id" exact>
              <OrderInfo />
            </ProtectedRoute>
            <ProtectedRoute path={["/profile", "/profile/orders"]} exact>
              <ProfilePage />
            </ProtectedRoute>
            <Route path="/ingredients/:id" exact component={IngredientsInfo}></Route>
            <Route path="/feed" exact>
              <OrderFeed />
            </Route>
            <Route path="/feed/:id" exact component={OrderInfo}></Route>
            <Route path="/">
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
