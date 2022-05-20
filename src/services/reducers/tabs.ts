import { TAB_ONE, TAB_TWO, TAB_THREE, TTabAction } from "../actions";

const initialTab: string = "one";
export const tabReducer = (state = initialTab, action: TTabAction): string => {
  switch (action.type) {
    case TAB_ONE: {
      return "one";
    }
    case TAB_TWO: {
      return "two";
    }
    case TAB_THREE: {
      return "three";
    }
    default: {
      return state;
    }
  }
};
