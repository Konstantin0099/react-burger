import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch, Redirect,  useHistory } from "react-router-dom";
import modal from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay.js";
import { useSelector } from "react-redux";

const Modal = ({ toggleVisible, onClose }) => {
  const history = useHistory();
  const { openPopup } = useSelector((state) => state);
  const closeModal =()=> {
    toggleVisible();
    history.replace({ pathname: '/'});
  }
  return (
    <ModalOverlay toggleVisible={toggleVisible} onClose={onClose}>
      <div className={modal.modal}>
        <div
          className={modal.closeIcon + " mt-10 mr-10"}
          onClick={closeModal}
        >
          <CloseIcon type="primary" />
        </div>
        {openPopup.popup}
      </div>
    </ModalOverlay>
  );
};
ModalOverlay.propTypes = {
  toggleVisible: PropTypes.func,
  onClose: PropTypes.func,
};

export default Modal;
