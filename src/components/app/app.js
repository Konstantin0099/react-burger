import style from "./app.module.css";
import AppHeader from "../app-header/app-header.js";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.js";
import BurgerConstructor from "../burger-constructor/burger-constructor.js";
import Modal from "../modal/modal.js";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_VISIBLE } from "../../services/actions/modal";
import { CLOSE_POPUP_ORDER } from "../../services/actions/modal";

const App = () => {
  const { visible } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className={style.app}>
      <AppHeader />
      {visible && (
        <Modal
          toggleVisible={() => dispatch({ type: TOGGLE_VISIBLE })}
          onClose={() => dispatch({ type: CLOSE_POPUP_ORDER })}
        ></Modal>
      )}
      <DndProvider backend={HTML5Backend}>
        <main className={style.main}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      </DndProvider>
    </div>
  );
};
export default App;
