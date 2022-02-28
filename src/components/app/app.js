
import style from "./app.module.css";
import AppHeader from "../app-header/app-header.js";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.js";
import BurgerConstructor from "../burger-constructor/burger-constructor.js";
import Modal from "../modal/modal.js";
import { useSelector } from "react-redux";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

const App = () => {
  const { visible } = useSelector((state) => state);
  return (
    <div className={style.app}>
      <AppHeader />
      {visible && <Modal></Modal>}
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
