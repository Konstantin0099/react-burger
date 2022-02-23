
import modal from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay.js";
import { useDispatch, useSelector } from "react-redux";
import {
  TOGGLE_VISIBLE,
} from "../../services/actions/modal";

const Modal = () => {
  const dispatch = useDispatch();
  const { data, dataOrder, openPopup } = useSelector((state) => state);
  return (
    <ModalOverlay toggleVisible={() => dispatch({ type: TOGGLE_VISIBLE })}>
      <div className={modal.modal}>
        <div
          className={modal.closeIcon + " mt-15 mr-10"}
          onClick={() => dispatch({ type: TOGGLE_VISIBLE })}
        >
          <CloseIcon type="primary" />
        </div>
        {openPopup.popup}
      </div>
    </ModalOverlay>
  );
};

export default Modal;
