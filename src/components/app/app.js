import style from "./app.module.css";
import AppHeader from "../app-header/app-header.js";
import {
  Login,
  Overlay,
  RegisterPage,
  ForgotPassword,
  ResetPassword,
  ProfilePage,
} from "../../pages/index";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.js";
import BurgerConstructor from "../burger-constructor/burger-constructor.js";
import Modal from "../modal/modal.js";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_VISIBLE } from "../../services/actions/modal";
import { CLOSE_POPUP_ORDER } from "../../services/actions/modal";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const { visible } = useSelector((state) => state);
  const dispatch = useDispatch();
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
            <Route path="/profile" exact>
              <ProfilePage />
            </Route>
            <Route path="/profile/orders" exact>
              {/* <OrderHistory></OrderHistory> */}
            </Route>
            <Route path="/profile/orders/:id" exact>
              {/* <OrderInfo></OrderInfo> */}
            </Route>

            <Route path="/ingredients/:id" exact>
              {/* <IngredientsInfo></IngredientsInfo> */}
            </Route>
            
            <Route path="/order-feed" exact>
              <h2>Лента заказов</h2>
              {/* <OrderFeed></OrderFeed> */}
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
            <Overlay> 
              Упсс....404
            </Overlay>
              </Route>
          </Switch>
        </DndProvider>
      </div>
    </Router>
  );
};
export default App;
