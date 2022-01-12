import React from "react";
import ReactDOM from 'react-dom';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { data } from '../../utils/data.js';
import style from "./burger-ingredients.module.css";

 const Ingredients = () => {
    const [current, setCurrent] = React.useState('one');
    return (
<div style={{ display: 'flex' }}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
      Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
      Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
      Начинки
      </Tab>
    </div>
    )
 }

 const Bun = ({ item }) => {
  return ( 
  <div className={style.bun}>
      <Counter count={1} size="default" />
    <img src={item.image} alt="упсс"/>
  <div className={style.price}>
    <span className="text text_type_digits-default mr-1">{item.price} </span>
  <CurrencyIcon type="primary"/></div>
  <h3  className="text text_type_main-default">{item.name}</h3>
</div>
  )
 }


 const Buns = ({ data, ingredients }) => {
  return ( 
   <div className={style.buns}>
         {data.map((item, index) => (
            
            item.type === ingredients && <Bun item={item} key={index}/>
         ))}
   </div>
  )
 }

 export default class BurgerIngredients extends React.Component {

  render() {
    return (
    <div className={style.ingredients + " mr-5"}>
        <p className="text text_type_main-large">Соберите бургер</p>
        <Ingredients />
        <ul className={style.list}>
        <li className={style.list + " text text_type_main-medium"}>
          Булки
          <Buns data={data} ingredients="bun"/>
        </li>
         <li className={style.list + " text text_type_main-medium"}>
           Соусы
        <Buns data={data} ingredients="sauce"/>
        </li>
        <li className={style.list + " text text_type_main-medium"}>Начинки
        <Buns data={data} ingredients="main"/>
        </li>
        </ul>
    </div>
    )
  }
}
