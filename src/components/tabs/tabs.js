
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from 'react-redux';
import { TAB_ONE, TAB_TWO, TAB_THREE } from '../../services/actions/tabs';

export const Tabs = () => {
  console.log("Tabs1");
  const dispatch = useDispatch();
  const currentTab = useSelector(state => state.currentTab);
  console.log("Tabs2", currentTab);
  return (
    <div style={{ display: "flex" }}>
      <Tab key={1} value="one" active={currentTab === "one"} onClick={() => dispatch({type: TAB_ONE})}>
        Булки
      </Tab>
      <Tab  key={2} value="two" active={currentTab === "two"} onClick={() => dispatch({type: TAB_TWO})}>
        Соусы
      </Tab>
      <Tab  key={3} value="three" active={currentTab === "three"} onClick={() => dispatch({type: TAB_THREE})}>
        Начинки
      </Tab>
    </div>
  );
};
