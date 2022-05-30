export const PASS_FORGOT: "PASS_FORGOT" = "PASS_FORGOT";
export const PASS_RESET: "PASS_RESET" = "PASS_RESET";
export const PASS_SUCCESS: "PASS_SUCCESS" = "PASS_SUCCESS";
export const PASS_FAILED: "PASS_FAILED" = "PASS_FAILED";

export interface IPassForgotAction {
  readonly type: typeof PASS_FORGOT;
}
export interface IPassResetAction {
  readonly type: typeof PASS_RESET;
  password: string | undefined;
}
export interface IPassSuccessAction {
  readonly type: typeof PASS_SUCCESS;
}
export interface IPassFailedAction {
  readonly type: typeof PASS_FAILED;
}

export type TPassAction = IPassForgotAction | IPassResetAction | IPassSuccessAction | IPassFailedAction;

export const getPassForgotAction = (): IPassForgotAction => ({
  type: PASS_FORGOT,
});
export const getPassResetAction = (password: string): IPassResetAction => ({
  type: PASS_RESET,
  password
});
export const getPassSuccessAction = (): IPassSuccessAction => ({
  type: PASS_SUCCESS,
});
export const getPassFailedAction = (): IPassFailedAction => ({
  type: PASS_FAILED,
});
