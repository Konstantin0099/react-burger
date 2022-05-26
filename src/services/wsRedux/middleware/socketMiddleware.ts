import { WS_CONNECTION, TWsAction, TWsConnectionStart} from "../action-types/wsActionTypes";
// import {RootState} from "../../../services/types/types";
export const socketMiddleware = () => {
  return (store: { dispatch: any; getState: any; }) => (next: (arg0: TWsConnectionStart) => void) => (action: TWsConnectionStart) => {
    // console.log("action  WebSocket=", action);

    const { dispatch, getState } = store;
    const { type, wsActions, urlWs } = action;
    const { user } = getState();
    let token: string | null = null;
    let accessToken: string = "";


    if (localStorage.getItem("accessToken") !== null) {accessToken = localStorage.getItem("accessToken") + ""}
    if (localStorage.getItem("accessToken") !== null) {token = accessToken.substring(7)}
    async function ws(urlWs: string, wsActions: TWsAction) {
      try {
        let socket = await new WebSocket(`${urlWs}?token=${token}`);
        wsEvent(socket, wsActions);
      } catch (err) {
        console.log("ошибка в  WebSocket........err", err);
        return err;
      }
    }
    (type === WS_CONNECTION) && user && ws(urlWs, wsActions);

    const wsEvent = (socket: WebSocket, actions: TWsAction) => {
      const { webSocket, onOpen, onClose, onError, onMessage } = actions;
      dispatch(webSocket(socket));
      socket.onopen = () => {
        dispatch(onOpen());
      };
      socket.onerror = () => {
        dispatch(onError());
      };
      socket.onmessage = (event) => {
        const { data } = event;
        const parsedData = JSON.parse(data);
        const { success, ...restParsedData } = parsedData;
        dispatch(onMessage(restParsedData));
      };
      socket.onclose = () => {
        dispatch(onClose());
      };
    };
    next(action);
  };
};
