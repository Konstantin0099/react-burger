import React from "react";
import './App.css';
import AppHeader from '../app-header/app-header.js';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.js';
import BurgerConstructor from '../burger-constructor/burger-constructor.js';
import { data, dataOrder  } from '../../utils/data.js';

export default class App extends React.Component {
  state = {
    data: data
 }

  render() {
  return (
    <div className="App">
     <AppHeader />
     
     <BurgerIngredients />
     <BurgerConstructor />
     
    </div>
  );}
}

