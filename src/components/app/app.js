import style from "./app.module.css";
import AppHeader from "../app-header/app-header.js";
import { Login, Overlay, RegisterPage } from "../../pages/index";
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
                <Overlay>
                  <Login />
                </Overlay>
            </Route>
            <Route path="/register" exact>
                <Overlay>
                  <RegisterPage />
                </Overlay>
            </Route>
            <Route path="/forgot-password" exact></Route>
            <Route path="/reset-password" exact></Route>
            <Route path="/profile" exact></Route>
            <Route path="/ingredients/:id" exact></Route>
            <Route path="/" exact>
              <main className={style.main}>
                <BurgerIngredients />
                <BurgerConstructor />
              </main>
            </Route>
            <Route>404</Route>
        </Switch>
          </DndProvider>
      </div>
    </Router>
  );
};
export default App;
