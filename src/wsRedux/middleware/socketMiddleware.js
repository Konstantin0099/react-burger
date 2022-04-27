export const socketMiddleware = (wsUrl, wsActions) => {

    return store => {
      let socket = null;
      console.log("socketMiddleware");
      return next => action => {
        const { dispatch, getState } = store;
        const { type, payload } = action;
        const { wsInit, wsSendMessage, onOpen, onClose, onError, onMessage } = wsActions;
        const { user } = getState();
        // console.log("socketMiddleware_");
        if (type === wsInit && user) {
            let token = localStorage.getItem("accessToken").substring(7);
            // console.log("socket = new WebSocket", `${wsUrl}?token=${token}`);
          socket = new WebSocket(`${wsUrl}?token=${token}`);
        }
        if (socket) {
          socket.onopen = event => {
            // console.log("socket.onopen");
            dispatch({ type: onOpen, payload: event });
          };
  
          socket.onerror = event => {
            // console.log("socket.onerror");
            dispatch({ type: onError, payload: event });
          };
  
          socket.onmessage = event => {
              const { data } = event;
              const parsedData = JSON.parse(data);
              const { success, ...restParsedData } = parsedData;
              
              dispatch({ type: onMessage, payload: restParsedData });
              // console.log("socket.onmessage", { type: onMessage, payload: restParsedData });
          };
  
          socket.onclose = event => {
            // console.log("socket.onclose");
            dispatch({ type: onClose, payload: event });
          };
  
          if (type === wsSendMessage) {
            // console.log("wsSendMessage");
            const message = { ...payload, token: user.token };
            socket.send(JSON.stringify(message));
          }
        }
  
        next(action);
      };
    };
  };