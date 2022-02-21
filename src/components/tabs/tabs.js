import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from 'react-redux';
import { TAB_ONE, TAB_TWO, TAB_THREE } from '../../services/actions/tabs';

export const Tabs = () => {
  const dispatch = useDispatch();
  const currentTab = useSelector(state => state.currentTab);
 console.log("Tabs > currentTab=", currentTab);
  return (
    <div style={{ display: "flex" }}>
      <Tab value="one" active={currentTab === "one"} onClick={() => dispatch({type: TAB_ONE})}>
        Булки
      </Tab>
      <Tab value="two" active={currentTab === "two"} onClick={() => dispatch({type: TAB_TWO})}>
        Соусы
      </Tab>
      <Tab value="three" active={currentTab === "three"} onClick={() => dispatch({type: TAB_THREE})}>
        Начинки
      </Tab>
    </div>
  );
};
