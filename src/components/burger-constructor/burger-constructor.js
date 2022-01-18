import React from "react";
import PropTypes from "prop-types";
import styleConstructor from "./burger-constructor.module.css";
import { Lists } from "../lists/lists.js";
import { OrderSum } from "../order-sum/order-sum.js";

export default class BurgerConstructor extends React.Component {
  render() {
    return (
      <section
        className={
          styleConstructor.burgerConstructor +
          " pt-20 pl-4 pr-4 ml-5 mr-0 mt-0 mb-0"
        }
      >
        <Lists data={this.props.data} dataOrder={this.props.dataOrder} />
        <OrderSum />
      </section>
    );
  }
}

BurgerConstructor.propTypes = {
  dataOrder: PropTypes.array,
  data: PropTypes.array,
};
