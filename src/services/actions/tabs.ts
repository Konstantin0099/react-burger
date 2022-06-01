export const TAB_ONE: "TAB_ONE" = "TAB_ONE";
export const TAB_TWO: "TAB_TWO" = "TAB_TWO";
export const TAB_THREE: "TAB_THREE" = "TAB_THREE";

export interface ITabOneAction {
  readonly type: typeof TAB_ONE;
}
export interface ITabTwoAction {
  readonly type: typeof TAB_TWO;
}
export interface ITabThreeAction {
  readonly type: typeof TAB_THREE;
}

export type TTabAction = ITabOneAction | ITabTwoAction | ITabThreeAction;

export const getTabOneAction = (): ITabOneAction => ({
  type: TAB_ONE,
});
export const getTabTwoAction = (): ITabTwoAction => ({
  type: TAB_TWO,
});
export const getTabThreeAction = (): ITabThreeAction => ({
  type: TAB_THREE,
});
