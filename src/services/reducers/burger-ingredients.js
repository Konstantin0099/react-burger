import {
  GET_DATA,
  GET_DATA_SUCCES,
  GET_DATA_FAILED,
} from "../actions/burger-ingredients";

const initialData = {
  dataRequest: false,
  dataFailed: false,
  data: [],
};
export const dataReducer = (state = initialData, action) => {
  switch (action.type) {
    case GET_DATA: {
      return {
        ...state,
        dataRequest: true,
        dataFailed: false,
      };
    }
    case GET_DATA_SUCCES: {
      return {
        ...state,
        dataRequest: false,
        data: action.data,
      };
    }
    case GET_DATA_FAILED: {
      return {
        ...state,
        dataRequest: false,
        dataFailed: true,
      };
    }
    default: {
      return state;
    }
  }
};
