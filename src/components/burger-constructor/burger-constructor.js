import React from "react";
import PropTypes from "prop-types";
import styleConstructor from "./burger-constructor.module.css";
import { Lists } from "../lists/lists.js";
import { OrderSum } from "../order-sum/order-sum.js";

const BurgerConstructor = (props) => {
  return (
    <section
      className={
        styleConstructor.burgerConstructor +
        " pt-20 pl-4 pr-4 ml-5 mr-0 mt-0 mb-0"
      }
    >
      <Lists data={props.data} dataOrder={props.dataOrder} />
      <OrderSum />
    </section>
  );
};

BurgerConstructor.propTypes = {
  dataOrder: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
      calories: PropTypes.number,
      type: PropTypes.string,
      price: PropTypes.number,
      carbohydrates: PropTypes.number,
      count: PropTypes.number,
      fat: PropTypes.number,
      proteins: PropTypes.number,
    })
  ),
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
      calories: PropTypes.number,
      type: PropTypes.string,
      price: PropTypes.number,
      carbohydrates: PropTypes.number,
      count: PropTypes.number,
      fat: PropTypes.number,
      proteins: PropTypes.number,
    })
  ),
};

export default BurgerConstructor;

// _id string
// name string
// image string
// calories number
// type string
// price number
// carbohydrates number
// count number
// fat number
// proteins number

// PeopleArrayProp: PropTypes.arrayOf(
//   PropTypes.instanceOf(Person)
// ),    multipleArrayProp: PropTypes.arrayOf(
//   PropTypes.oneOfType([
//     PropType.number,
//     PropType.string
//   ])
// )

// Component.propTypes = {  profileProp: PropTypes.shape({  id: PropTypes.number,  fullname: PropTypes.string,  gender: PropTypes.oneOf(['M', 'F']),  birthdate: PropTypes.instanceOf(Date),  isAuthor: PropTypes.bool
//   })
// }

// Component.propTypes = { booleanObjectProp: PropTypes.objectOf(
//   PropTypes.bool
// ), multipleObjectProp: PropTypes.objectOf(
//   PropTypes.oneOfType([
//     PropType.func,
//     PropType.number,
//     PropType.string,
//     PropType.instanceOf(Person)
//   ])
// )
