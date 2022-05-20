import { IItem } from "../actions";
// export const TOGGLE_VISIBLE_LIST: 'TOGGLE_VISIBLE_LIST' = "TOGGLE_VISIBLE_LIST";
export const VISIBLE_LIST: "VISIBLE_LIST" = "VISIBLE_LIST";
export const DISABLED_LIST: "DISABLED_LIST" = "DISABLED_LIST";
export const DISABLED_MODAL: "DISABLED_MODAL" = "DISABLED_MODAL";
export const VISIBLE_MODAL: "VISIBLE_MODAL" = "VISIBLE_MODAL";
export const TOGGLE_VISIBLE: "TOGGLE_VISIBLE" = "TOGGLE_VISIBLE";
export const OPEN_POPUP_INGREDIENTS: "OPEN_POPUP_INGREDIENTS" = "OPEN_POPUP_INGREDIENTS";
export const OPEN_POPUP_ORDER: "OPEN_POPUP_ORDER" = "OPEN_POPUP_ORDER";
export const CLOSE_POPUP_ORDER: "CLOSE_POPUP_ORDER" = "CLOSE_POPUP_ORDER";
export const OPEN_POPUP_ORDER_INGREDIENTS: "OPEN_POPUP_ORDER_INGREDIENTS" = "OPEN_POPUP_ORDER_INGREDIENTS";

export interface IVisibleListAction {
  readonly type: typeof VISIBLE_LIST;
}
export interface IDisabledListAction {
  readonly type: typeof DISABLED_LIST;
}
export interface IDisabledModalAction {
  readonly type: typeof DISABLED_MODAL;
}
export interface IVisibleModalAction {
  readonly type: typeof VISIBLE_MODAL;
  readonly pathname: string;
}
export interface IToggleVisibleAction {
  readonly type: typeof TOGGLE_VISIBLE;
}
export type TVisible = 
| IVisibleListAction
| IDisabledListAction
| IDisabledModalAction
| IVisibleModalAction
| IToggleVisibleAction

export interface IOpenPopupIngredientsAction {
  readonly type: typeof OPEN_POPUP_INGREDIENTS;
  readonly item: IItem;
}
export interface IOpenPopupOrderAction {
  readonly type: typeof OPEN_POPUP_ORDER;
}
export interface IClosePopupOrderAction {
  readonly type: typeof CLOSE_POPUP_ORDER;
}
export interface IOpenPopupOrderIngredientsAction {
  readonly type: typeof OPEN_POPUP_ORDER_INGREDIENTS;
  readonly item: string;
}

export type TOpenPopup = 
| IOpenPopupIngredientsAction
| IOpenPopupOrderAction
| IClosePopupOrderAction
| IOpenPopupOrderIngredientsAction

export const getVisibleListAction = (): IVisibleListAction => ({
  type: VISIBLE_LIST,
});
export const getDisabledListAction = (): IDisabledListAction => ({
  type: DISABLED_LIST,
});
export const getDisabledModalAction = (): IDisabledModalAction => ({
  type: DISABLED_MODAL,
});
export const getVisibleModalAction = (pathname: string): IVisibleModalAction => ({
  type: VISIBLE_MODAL,
  pathname,
});
export const getToggleVisibleAction = (): IToggleVisibleAction => ({
  type: TOGGLE_VISIBLE,
});
export const getOpenPopupIngredientsAction = (item: IItem): IOpenPopupIngredientsAction => ({
  type: OPEN_POPUP_INGREDIENTS,
  item,
});
export const getOpenPopupOrderAction = (): IOpenPopupOrderAction => ({
  type: OPEN_POPUP_ORDER,
});
export const getClosePopupOrderAction = (): IClosePopupOrderAction => ({
  type: CLOSE_POPUP_ORDER,
});
export const getOpenPopupOrderIngredientsAction = (item: string): IOpenPopupOrderIngredientsAction => ({
  type: OPEN_POPUP_ORDER_INGREDIENTS,
  item,
});
