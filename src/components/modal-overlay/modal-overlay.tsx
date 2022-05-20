// import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import { useHistory, useLocation } from "react-router-dom";
import modal from "./modal-overlay.module.css";
import { CLOSE_POPUP_ORDER } from "../../services/actions/modal";
import { useDispatch } from "react-redux";
import { MouseEvent, FC } from "react"; 
import { RouteProps } from 'react-router';

// let type TElement = typeof document.querySelector('#modals');
// let type TElement = typeof modalRoot;

const ModalOverlay: FC<{toggleVisible: () => void} & RouteProps> = ({ toggleVisible, children }) => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  let modalRootPlaceholder = document.createElement('div');
   let modalRoot = document.querySelector('#modals');
  // modalRoot.append(div);
  const closedModal = (e: MouseEvent<HTMLDivElement>) => {
    // e.target === e.currentTarget && toggleVisible(history, location);
    e.target === e.currentTarget && toggleVisible();
  };
  // const modalRoot = document.getElementById("modals");
  let div = document.createElement('div');
  const closedModalEscape = (e: {key: string}) => {
    e.key === "Escape" && toggleVisible();
  };
  React.useEffect(() => {
    document.addEventListener("keydown", closedModalEscape);
    return () => {
      document.removeEventListener("keydown", closedModalEscape);
      dispatch({ type: CLOSE_POPUP_ORDER })
      // onClose();
    };
  }, []);
// console.log("modalRoot + 1",modalRoot, modalRoot1);
  return ReactDOM.createPortal(
    <div className={modal.overlay} onClick={closedModal}>
      {children}
    </div>,
    modalRoot ? modalRoot : modalRootPlaceholder
    // div
  );
};

// ModalOverlay.propTypes = {
//   children: PropTypes.object,
//   toggleVisible: PropTypes.func,
// };

export default ModalOverlay;
