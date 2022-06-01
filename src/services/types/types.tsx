import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";
import { store } from "../../../src";
import { TypedUseSelectorHook, useSelector as selectorHook, useDispatch as dispatchHook } from "react-redux";
import { TWsConnectionStart, TWsFeedActions, TWsHistoryActions } from "../../services/wsRedux/action-types";
import {
  TAuthActions,
  TOrderActions,
  TDataOrderActions,
  TVisible,
  TOpenPopup,
  TTabAction,
} from "../../services/actions";
type TBasicAction =
  | TWsFeedActions
  | TWsConnectionStart
  | TWsHistoryActions
  | TAuthActions
  | TOrderActions
  | TDataOrderActions
  | TVisible
  | TOpenPopup
  | TTabAction;
export type RootState = ReturnType<typeof store.getState>;
export type TSetData = (data: string, name: string) => void;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<ThunkAction<ReturnType, Action, RootState, TBasicAction>>;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();
export type TDispatch = typeof useDispatch;
export type TLocation = {
  hash: string;
  key?: string;
  pathname: string;
  search: string;
  state: { revert: string };
};
export type TNewData = {
  name: string;
  password: string;
  email: string;
  token: string;
};
export type TMatch = {
  isExact: boolean;
  params: { id: string };
  path: string;
  url: string;
};
