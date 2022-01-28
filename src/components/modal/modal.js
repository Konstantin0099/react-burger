import PropTypes from "prop-types";
import modal from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay.js";

const Modal = (props) => {
  return (
    <ModalOverlay toggleVisible={props.toggleVisible}>
      <div className={modal.modal}>
        <div
          className={modal.closeIcon + " mt-15 mr-10"}
          onClick={props.toggleVisible}
        >
          <CloseIcon type="primary" />
        </div>
        {props.children}
      </div>
    </ModalOverlay>
  );
};

Modal.propTypes = {
  children: PropTypes.object,
  toggleVisible: PropTypes.func,
};

export default Modal;
