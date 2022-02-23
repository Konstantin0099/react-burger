import React, { useEffect } from "react";
import PropTypes from "prop-types";
import style from "./burger-ingredients.module.css";
import { MenuSection } from "../menu-section/menu-section";
import { Tabs } from "../tabs/tabs.js";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../services/thunk/get-data";

const BurgerIngredients = (props) => {
  const dispatch = useDispatch();
  const { data , dataOrder, openPopup  } = useSelector((state) => state);
  // const { dataOrder } = useSelector((state) => state);
  // console.log("data", data, "dataOrder", dataOrder);
  useEffect(() => {
    dispatch(getData());
  }, []);

  const tabsName = ["Булки", "Начинки", "Соусы"];
  let arrTabs = [];
  data.data.forEach((tab) => {
    if (!arrTabs.includes(tab.type)) {
      arrTabs = [...arrTabs, tab.type];
    }
  });
  const setIngredients = () => {
    return arrTabs.map((tab, index) => {
      return (
        <li
          key={index}
          className={style.listBlock + " text text_type_main-medium"}
        >
          {tabsName[index]}
          <MenuSection
            openPopup={props.openPopup}
            data={data.data}
            ingredient={tab}
            dataOrder={dataOrder}
          />
        </li>
      );
    });
  };

  return (
    <section className={style.ingredients + " mr-5 pt-5"}>
      <p className="text text_type_main-large pb-5">Соберите бургер</p>
      <Tabs />
      <ul className={style.list + " pt-10"}>{setIngredients()}</ul>
    </section>
  );
};

BurgerIngredients.propTypes = {
  openPopup: PropTypes.func,
};

export default BurgerIngredients;
