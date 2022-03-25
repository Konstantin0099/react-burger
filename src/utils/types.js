import { string, number, shape} from "prop-types";

export const ingredientType =  shape({
    _id: string,
    name: string,
    image: string,
    calories: number,
    type: string,
    price: number,
    carbohydrates: number,
    count: number,
    fat: number,
    proteins: number,
  });