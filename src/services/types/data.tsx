import { IItem } from "../actions";

export type TItemDataOrder = {
  readonly _id: string;
  readonly type: string;
};

export type TPayloadGetHistory = {
  orders: Array<{
    name: string;
    ingredients: string[];
    _id: string;
    status: string;
    number: number;
    createdAt: string;
    updatedAt: string;
  }>;
  total: number;
  totalToday: number;
};
export type TGetData = {
  data: Array<IItem>;
  success: boolean;
};
export type TGetNumber = {
  name: string;
  order: {
    createdAt: string;
    ingredients: Array<IItem>;
    length: number;
    name: string;
    number: number;
    owner: {
      createdAt: string;
      email: string;
      name: string;
      updatedAt: string;
    };
    price: 3313;
    status: "done" | "created" | "pending";
    updatedAt: string;
    _id: string;
  };
  success: boolean;
};
export type TLogout = {
  success: Boolean;
  message: "Successful logout";
};
