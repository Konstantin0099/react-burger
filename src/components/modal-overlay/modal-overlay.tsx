import React from "react";
import ReactDOM from "react-dom";
import modal from "./modal-overlay.module.css";
import { CLOSE_POPUP_ORDER } from "../../services/actions/modal";
import { useDispatch } from "../../services/types/types";
import { MouseEvent, FC } from "react";
import { RouteProps } from "react-router";

const ModalOverlay: FC<{ toggleVisible: () => void } & RouteProps> = ({ toggleVisible, children }) => {
  const dispatch = useDispatch();
  let modalRootPlaceholder: HTMLDivElement = document.createElement("div");
  let modalRoot: Element | null = document.querySelector("#modals");

  const closedModal = (e: MouseEvent<HTMLDivElement>) => {
    e.target === e.currentTarget && toggleVisible();
  };
  // let div = document.createElement("div");
  const closedModalEscape = (e: { key: string }) => {
    e.key === "Escape" && toggleVisible();
  };
  React.useEffect(() => {
    document.addEventListener("keydown", closedModalEscape);
    return () => {
      document.removeEventListener("keydown", closedModalEscape);
      dispatch({ type: CLOSE_POPUP_ORDER });
    };
  }, []);
  return ReactDOM.createPortal(
    <div className={modal.overlay} onClick={closedModal}>
      {children}
    </div>,
    modalRoot ? modalRoot : modalRootPlaceholder
  );
};

export default ModalOverlay;
