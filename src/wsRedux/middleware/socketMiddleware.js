export const socketMiddleware = (wsUrl, wsActions, wsActionsHistory) => {
  return (store) => {
    let socketHistory = null;
    let socketFeed = null;
    return (next) => (action) => {
      const { dispatch, getState } = store;
      const { type } = action;
      const { user } = getState();
      let token = localStorage.getItem("accessToken").substring(7);
      if (type === wsActions.wsInit && user) {
        socketFeed = new WebSocket(`${wsUrl}/all?token=${token}`);
      }
      if (type === wsActionsHistory.wsInit && user) {
        socketHistory = new WebSocket(`${wsUrl}?token=${token}`);
      }
      const ws = (socket, actions) => {
        const { onOpen, onClose, onError, onMessage } = actions;
        if (socket) {
          socket.onopen = (event) => {
            dispatch({ type: onOpen, payload: event });
          };
          
          socket.onerror = (event) => {
            dispatch({ type: onError, payload: event });
          };
          
          socket.onmessage = (event) => {
            const { data } = event;
            const parsedData = JSON.parse(data);
            const { success, ...restParsedData } = parsedData;
            
            dispatch({ type: onMessage, payload: restParsedData });
          };
          
          socket.onclose = (event) => {
            dispatch({ type: onClose, payload: event });
          };
          }
      };
      socketFeed && ws(socketFeed, wsActions);
      socketHistory && ws(socketHistory, wsActionsHistory);
      next(action);
    };
  };
};
