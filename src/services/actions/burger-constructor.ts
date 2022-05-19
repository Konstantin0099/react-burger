
export const ORDER_SUM: 'ORDER_SUM' = 'ORDER_SUM';
export const GET_NUMBER: 'GET_NUMBER' = "GET_NUMBER";
export const GET_NUMBER_SUCCESS: 'GET_NUMBER_SUCCESS' = "GET_NUMBER_SUCCESS";
export const GET_NUMBER_FAILED: 'GET_NUMBER_FAILED' = "GET_NUMBER_FAILED";
export const NUMBER_REMOVE: 'NUMBER_REMOVE' = "NUMBER_REMOVE";
export const TOGGLE_ITEM_CONSTRUCTOR: 'TOGGLE_ITEM_CONSTRUCTOR' = "TOGGLE_ITEM_CONSTRUCTOR";
export const ADD_ITEM_CONSTRUCTOR: 'ADD_ITEM_CONSTRUCTOR' = "ADD_ITEM_CONSTRUCTOR";
export const ADD_BUN_CONSTRUCTOR: 'ADD_BUN_CONSTRUCTOR' = "ADD_BUN_CONSTRUCTOR";
export const DELETE_ITEM_CONSTRUCTOR: 'DELETE_ITEM_CONSTRUCTOR' = "DELETE_ITEM_CONSTRUCTOR";

// акшены
export interface IOrderSumAction{
    readonly type: typeof ORDER_SUM;
    sum: number;
  }
  
  export interface IGetNumberAction{
      readonly type: typeof GET_NUMBER;
    }
    export interface IGetNumberSuccessAction{
        readonly type: typeof GET_NUMBER_SUCCESS;
        number: number;
    }
    export interface IGetNumberFailedAction{
        readonly type: typeof GET_NUMBER_FAILED;
      }
      export interface INumberRemoveAction{
        readonly type: typeof NUMBER_REMOVE;
    }
    export interface IDeleteItemConstructorAction{
        readonly type: typeof DELETE_ITEM_CONSTRUCTOR;
        index: number;
      }
    export interface IAddBunConstructorAction{
        readonly type: typeof ADD_BUN_CONSTRUCTOR;
        dragItem: any;
      }
    export interface IAddItemConstructorAction{
        readonly type: typeof ADD_ITEM_CONSTRUCTOR;
        dragIndex: number;
        dragItem: any;
      }
    export interface IToggleItemConstructorAction{
        readonly type: typeof TOGGLE_ITEM_CONSTRUCTOR;
        dragIndex: number;
        hoverIndex: number;
      }
      

// генераторы
  export const getOrderSumAction = (sum: number): IOrderSumAction => ({
    type: ORDER_SUM,
    sum
    });
    export const getNumberAction = (): IGetNumberAction => ({
        type: GET_NUMBER
    });
    export const getNumberSuccessAction = (number: number): IGetNumberSuccessAction => ({
        type: GET_NUMBER_SUCCESS,
        number
    });
    export const getNumberFailedAction = (): IGetNumberFailedAction => ({
        type: GET_NUMBER_FAILED
    });
    export const getNumberRemoveAction = (): INumberRemoveAction => ({
        type: NUMBER_REMOVE
    });
    export const getDeleteItemConstructorAction = (index: number): IDeleteItemConstructorAction => ({
        type: DELETE_ITEM_CONSTRUCTOR,
        index
    });
    export const getAddBunConstructorAction = (dragItem: any): IAddBunConstructorAction => ({
        type: ADD_BUN_CONSTRUCTOR,
        dragItem
    });
    export const getAddItemConstructorAction = (dragIndex: number, dragItem: any): IAddItemConstructorAction => ({
        type: ADD_ITEM_CONSTRUCTOR,
        dragIndex,
        dragItem
    });
    export const getToggleItemConstructorAction = (dragIndex: number, hoverIndex: number): IToggleItemConstructorAction => ({
        type: TOGGLE_ITEM_CONSTRUCTOR,
        dragIndex,
        hoverIndex
    });
