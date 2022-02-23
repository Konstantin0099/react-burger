import { TAB_ONE, TAB_TWO, TAB_THREE } from '../actions/tabs';

const initialTab = 'one';
export const tabReducer = (state = initialTab, action) => {
  // console.log("tabReducer", action.type, state );
    switch (action.type) {
      case TAB_ONE: {
        return 'one'
      }
      case TAB_TWO: {
        return "two"
      }
      case TAB_THREE: {
        return "three"
      }
      default: {
        return state;
      }
    }

  };