import { TAB_ONE, TAB_TWO, TAB_THREE } from '../actions/tabs';

const initialTab = 'one';
export const tabReducer = (state = initialTab, action) => {
  console.log("tabReducer", action.type, state );
    switch (action.type) {
      case TAB_ONE: {
        console.log("tabReducer1");
        return 'one'
      }
      case TAB_TWO: {
        console.log("tabReducer2");
        return "two"
      }
      case TAB_THREE: {
        console.log("tabReducer3");
        return "three"
      }
      default: {
        return state;
      }
    }

  };