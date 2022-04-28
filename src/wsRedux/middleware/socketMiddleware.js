export const socketMiddleware = (wsUrl, wsActions, wsActionsHistory) => {
  return (store) => {
    let socketHistory = null;
    let socketFeed = null;
    // console.log("socketMiddleware");
    return (next) => (action) => {
      const { dispatch, getState } = store;
      const { type, payload } = action;
      // const { wsInit, wsSendMessage, onOpen, onClose, onError, onMessage } = wsActions;
      const { user } = getState();
      let token = localStorage.getItem("accessToken").substring(7);
      // console.log(
      //   "сравниваем type ===  wsActionsHistory.wsInit=",
      //   type,
      //   type === wsActionsHistory.wsInit,
      //   wsActionsHistory.wsInit,
      // );
      // console.log("type ===  wsActions.wsInit=", (type ===  wsActions.wsInit) );
      if (type === wsActions.wsInit && user) {
        // console.log("socket = new WebSocket");
        socketFeed = new WebSocket(`${wsUrl}/all?token=${token}`);
      }
      if (type === wsActionsHistory.wsInit && user) {
        socketHistory = new WebSocket(`${wsUrl}?token=${token}`);
        // console.log("socketHistory = new WebSocket");
      }
      // console.log("socketFeed", socketFeed);
      const ws = (socket, actions) => {
        const { wsInit, wsSendMessage, onOpen, onClose, onError, onMessage } = actions;
        if (socket) {
          socket.onopen = (event) => {
            // console.log("socket.onopen", event);
            dispatch({ type: onOpen, payload: event });
          };
          
          socket.onerror = (event) => {
            // console.log("socket.onerror", event);
            dispatch({ type: onError, payload: event });
          };
          
          socket.onmessage = (event) => {
            const { data } = event;
            const parsedData = JSON.parse(data);
            const { success, ...restParsedData } = parsedData;
            
            dispatch({ type: onMessage, payload: restParsedData });
            // console.log("..........ПИСЬМО С СЕРВЕРА", { type: onMessage, payload: restParsedData });
          };
          
          socket.onclose = (event) => {
            // console.log("socket.onclose", event);
            dispatch({ type: onClose, payload: event });
          };
          
          // if (type === wsSendMessage) {
            //   // console.log("wsSendMessage");
            //   const message = { ...payload, token: user.token };
            //   socket.send(JSON.stringify(message));
            // }
          }
          // console.log("ws = (socket, actions)", socket);
      };
      socketFeed && ws(socketFeed, wsActions);
      socketHistory && ws(socketHistory, wsActionsHistory);
      next(action);
    };
  };
};
