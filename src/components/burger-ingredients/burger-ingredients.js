import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useRef } from "react";
import style from "./burger-ingredients.module.css";
import { MenuSection } from "../menu-section/menu-section";
import { Tabs } from "../tabs/tabs.js";
import { getData } from "../../services/thunk/get-data";
import { TAB_ONE, TAB_TWO, TAB_THREE } from "../../services/actions/tabs";

const SetIngredients = ({ tab, index }) => {
  const tabsName = ["Булки", "Начинки", "Соусы"];
  const inputRef = useRef(null);
  return (
    <li
      className={style.listBlock + " text text_type_main-medium"}
      ref={inputRef}
    >
      {tabsName[index]}
      <MenuSection ingredient={tab} />
    </li>
  );
};

const BurgerIngredients = () => {

  const dispatch = useDispatch();
  const { data, currentTab } = useSelector((state) => state);
  const inputRef = useRef(null);
  useEffect(() => {
    dispatch(getData());
  },[dispatch]);
  let arrTabs = [];
  data.data.forEach((tab) => {
    if (!arrTabs.includes(tab.type)) {
      arrTabs = [...arrTabs, tab.type];
    }
  });
  const handleScroll = (e) => {
    const y = inputRef.current.getBoundingClientRect().y;
    let y0 = inputRef.current.childNodes[0].getBoundingClientRect().y;
    let y1 = inputRef.current.childNodes[1].getBoundingClientRect().y;
    let y2 = inputRef.current.childNodes[2].getBoundingClientRect().y;
    if (0 < y0 - y && y0 - y < 180 && currentTab !== "one") {
      dispatch({ type: TAB_ONE });
    }
    if (0 < y1 - y && y1 - y < 180 && currentTab !== "three") {
      dispatch({ type: TAB_THREE });
    }
    if (0 < y2 - y && y2 - y < 180 && currentTab !== "two") {
      dispatch({ type: TAB_TWO });
    }
  };
  
  return (
    <section className={style.ingredients + " mr-5 pt-5"}>
      <p className="text text_type_main-large pb-5">Соберите бургер</p>
      <Tabs />
      <ul
        className={style.list + " pt-10"}
        onScroll={handleScroll}
        ref={inputRef}
      >
        {arrTabs.map((tab, index) => {
          return <SetIngredients key={tab[index]} tab={tab} index={index} />;
        })}
      </ul>
    </section>
  );
};

SetIngredients.propTypes = {
  tab: PropTypes.string,
  index: PropTypes.number,
};

export default BurgerIngredients;
