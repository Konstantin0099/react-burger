import React from "react";
import './App.css';
import AppHeader from '../app-header/app-header.js';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.js';
import { data } from '../../utils/data.js';

export default class App extends React.Component {
  state = {
    data: data
 }

  render() {
  return (
    <div className="App">
     <AppHeader />
     <BurgerIngredients />

    </div>
  );}
}

