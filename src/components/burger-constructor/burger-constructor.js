import React from "react";
import ReactDOM from 'react-dom';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { data } from '../../utils/data.js';
import styleConstructor from "./burger-constructor.module.css";


const Lists = ({ data }) => {
    return ( 
        <ul className={styleConstructor.ingredients}>

           {data.map((item, index) => (
              item.__v > 0 &&
              <li className={styleConstructor.ingredient}> 
              <ConstructorElement 
              text={item.name}
              price={item.price}
              thumbnail={item.image}
              key={index}
              />
                </li>
           ))}
   
     </ul>
    )
   }


 const Constructor = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <ConstructorElement
                type="top"
                isLocked={true}
                text="Краторная булка N-200i (верх)"
                price={200}
                thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
              />

              <Lists data={data}/>     

              <ConstructorElement
                type="bottom"
                isLocked={true}
                text="Краторная булка N-200i (низ)"
                price={200}
                thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
              />
            </div>
          )
 }


 const Buns = ({ data, ingredients }) => {
  return ( 
   <div >
         
   </div>
  )
 }

 export default class BurgerConstructor extends React.Component {

  render() {
    return (
    <div>
       <Constructor/>
    </div>
    )
  }
}
