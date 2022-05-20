import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAILED, TData, IItem } from "../actions";

type TInitialData = {
  dataRequest: boolean,
  dataFailed: boolean,
  data: Array<IItem>,
};
const initialData: TInitialData = {
  dataRequest: false,
  dataFailed: false,
  data: [],
};
export const dataReducer = (state = initialData, action: TData): TInitialData => {
  switch (action.type) {
    case GET_DATA: {
      return {
        ...state,
        dataRequest: true,
        dataFailed: false,
      };
    }
    case GET_DATA_SUCCESS: {
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
