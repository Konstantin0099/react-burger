import { WS_CONNECTION } from "../../wsRedux/action-types/wsActionTypes";
export const socketMiddleware = (wsUrl, wsActionsHistory) => {
  // ?????
    // let socketHistory = null;
    // let socketFeed = null;
    ///
  return (store) => (next) => (action) => {
      const { dispatch, getState } = store;
      
      const { type, wsActions , urlWs } = action;
      const { user } = getState();
      console.log("socketMiddleware", type, wsActions,  urlWs);
      let token = "";
      (user.name !== "") && (token = localStorage.getItem("accessToken").substring(7))


      async function ws(urlWs, wsActions) {
        console.log("async function ws(urlWs, wsActions)");
   try {
       let socket = await new WebSocket(`${urlWs}?token=${token}`);
       wsEvent(socket, wsActions);
       
     } catch(err) {
       console.log("wsStart ........err", err);
       return err
      }
      
    }
    
 

      type === WS_CONNECTION && user && ws(urlWs, wsActions)

      // type === wsActions.wsInit && user && ws().then(res => socketFeed = res)
      // type === wsActionsHistory.wsInit && user && ws(`${wsUrl}`, wsActionsHistory).then(res => socketHistory = res)
      //  socketHistory = new WebSocket(`${wsUrl}?token=${token}`);
      // const ws = (socket, actions) => {
      // type === "CLOSE" && socketFeed.close()
          
          const wsEvent = (socket, actions) => {
            // let wsSocket = null;
               console.log("wsEvent socket=",socket);
            const {webSocket, onOpen, onClose, onError, onMessage } = actions;
            // socket.then(res => wsSocket = res)
            dispatch({ type: webSocket, payload: socket });
            // if (socket) {
              socket.onopen = (event) => {
                dispatch({ type: onOpen, payload: event });
              };
              
              socket.onerror = (event) => {
                dispatch({ type: onError, payload: event });
              };
              
              socket.onmessage = (event) => {
            console.log("socket.onmessage    socket= event=", socket, event, actions);
            const { data } = event;
            const parsedData = JSON.parse(data);
            const { success, ...restParsedData } = parsedData;
            
            dispatch({ type: onMessage, payload: restParsedData });
          };
          
          socket.onclose = (event) => {
            console.log("CLOSED......................CLOSED event=", event);
            dispatch({ type: onClose, payload: event });
          };

          // }
        }
      next(action);
    };
  // };
};

     
    //   switch (type) {
        //     case WS_CONNECTION_START: {
          // wsReductor(urlWs)
        // }

        //       };
           //     case WS_CONNECTION_START_HISTORY: {
        //    socket = new WebSocket(`${wsUrl}/all?token=${token}`);
        //       }
        //     default:
        //       return state;
        //   }
        // };