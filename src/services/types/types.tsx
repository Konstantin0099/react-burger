import {store} from "../../index"
import {
    TypedUseSelectorHook,
    useSelector as selectorHook
  } from 'react-redux';

export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook; 