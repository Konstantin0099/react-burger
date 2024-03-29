import { WS_CONNECTION } from "../action-types/wsActionTypes";
export const socketMiddleware = () => {
  return (store) => (next) => (action) => {
    const { dispatch, getState } = store;
    const { type, wsActions, urlWs } = action;
    const { user } = getState();
    let token = "";
    localStorage.getItem("accessToken") && (token = localStorage.getItem("accessToken").substring(7));
    async function ws(urlWs, wsActions) {
      try {
        let socket = await new WebSocket(`${urlWs}?token=${token}`);
        wsEvent(socket, wsActions);
      } catch (err) {
        console.log("ошибка в  WebSocket........err", err);
        return err;
      }
    }
    type === WS_CONNECTION && user && ws(urlWs, wsActions);
    const wsEvent = (socket, actions) => {
      const { webSocket, onOpen, onClose, onError, onMessage } = actions;
      dispatch({ type: webSocket, payload: socket });
      socket.onopen = () => {
        dispatch(onOpen());
      };
      socket.onerror = () => {
        dispatch({ type: onError });
      };
      socket.onmessage = (event) => {
        const { data } = event;
        const parsedData = JSON.parse(data);
        const { success, ...restParsedData } = parsedData;
        dispatch(onMessage(restParsedData));
      };
      socket.onclose = () => {
        dispatch({ type: onClose });
      };
    };
    next(action);
  };
};
