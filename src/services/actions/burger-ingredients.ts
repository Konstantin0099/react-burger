import { IItem } from "../actions"
export const GET_DATA: 'GET_DATA' = "GET_DATA";
export const GET_DATA_SUCCESS: 'GET_DATA_SUCCESS' = "GET_DATA_SUCCESS";
export const GET_DATA_FAILED: 'GET_DATA_FAILED' = "GET_DATA_FAILED";

export interface IGetDataAction {
    readonly type: typeof GET_DATA;
}
export interface IGetDataSuccessAction {
    readonly type: typeof GET_DATA_SUCCESS;
    data: Array<IItem>;
  }
export interface IGetDataFailedAction {
    readonly type: typeof GET_DATA_FAILED;
  }

  export type TData = 
  | IGetDataAction
  | IGetDataSuccessAction
  | IGetDataFailedAction


export const getGetDataAction = (): IGetDataAction => ({
    type: GET_DATA,
  });
export const getGetDataSuccessAction = (data: any): IGetDataSuccessAction => ({
    type: GET_DATA_SUCCESS,
    data
  });
export const getGetDataFailedAction = (): IGetDataFailedAction => ({
    type: GET_DATA_FAILED,
  });
