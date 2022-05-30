import { useEffect, FC, useRef, UIEventHandler } from "react";
import style from "./burger-ingredients.module.css";
import { MenuSection } from "../menu-section/menu-section";
import { Tabs } from "../tabs/tabs";
import { getData } from "../../services/thunk/get-data";
import { TAB_ONE, TAB_TWO, TAB_THREE } from "../../services/actions/tabs";
import { useSelector,  useDispatch } from "../../services/types/types";
import { IItem } from "../../services/actions";

const SetIngredients: FC<{ tab: string; index: number }> = ({ tab, index }) => {
  const tabsName: ReadonlyArray<string> = ["Булки", "Начинки", "Соусы"];
  const inputRef = useRef(null);
  return (
    <li className={style.listBlock + " text text_type_main-medium"} ref={inputRef}>
      {tabsName[index]}
      <MenuSection ingredient={tab} />
    </li>
  );
};

const BurgerIngredients: FC = () => {
  const dispatch = useDispatch();
  const { data, currentTab } = useSelector((state) => state);
  const inputRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  let arrTabs: Array<string> = [];
  data.data.forEach((tab: IItem) => {
    if (!arrTabs.includes(tab.type)) {
      arrTabs = [...arrTabs, tab.type];
    }
  });
  const handleScroll: UIEventHandler<HTMLUListElement> = (e) => {
    const y = inputRef.current;
    if (y !== null) {
      let yy: number = y.getBoundingClientRect().y;
      let yy0: number = y.children[0].getBoundingClientRect().y;
      let yy1: number = y.children[1].getBoundingClientRect().y;
      let yy2: number = y.children[2].getBoundingClientRect().y;
      
      if (0 < yy0 - yy && yy0 - yy < 180 && currentTab !== "one") {
        dispatch({ type: TAB_ONE });
      }
      if (0 < yy1 - yy && yy1 - yy < 180 && currentTab !== "three") {
        dispatch({ type: TAB_THREE });
      }
      if (0 < yy2 - yy && yy2 - yy < 180 && currentTab !== "two") {
        dispatch({ type: TAB_TWO });
      }
    }
  };
  return (
    <section className={style.ingredients + " mr-5 pt-5"}>
      <p className="text text_type_main-large pb-5">Соберите бургер</p>
      <Tabs />
      <ul className={style.list + " pt-10"} onScroll={handleScroll} ref={inputRef}>
        {arrTabs.map((tab, index) => {
          return <SetIngredients key={tab[index]} tab={tab} index={index} />;
        })}
      </ul>
    </section>
  );
};

export default BurgerIngredients;
