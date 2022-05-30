interface CustomBody<T> extends Body {
  json(): Promise<T>;
}

interface ICheckResponse<T> extends CustomBody<T> {
  bodyUsed: boolean;
  headers: Headers;
  ok: boolean;
  redirected: boolean;
  status: number;
  statusText: string;
  type: ResponseType;
  url: string;
}
export function checkResponse<T>(res: ICheckResponse<T>): Promise<T> {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`${res.status}`);
}
