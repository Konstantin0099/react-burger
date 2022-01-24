import React from "react";
import style from './app.module.css';
import AppHeader from '../app-header/app-header.js';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.js';
import BurgerConstructor from '../burger-constructor/burger-constructor.js';
import { data, dataOrder  } from '../../utils/data.js';

export default class App extends React.Component {
  state = {
    data: data,
    dataOrder: dataOrder
 }

  render() {
  return (
    <div className={style.app}>
     <AppHeader />
     <main className={style.main}>
     <BurgerIngredients data={this.state.data} dataOrder={this.state.dataOrder}/>
     <BurgerConstructor data={this.state.data} dataOrder={this.state.dataOrder}/>
     </main>
    </div>
  );}
}

