import PropTypes from "prop-types";
import { useHistory, useLocation } from "react-router-dom";
import modal from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay.js";
// import { useSelector } from "react-redux";
import { useSelector } from "../../services/types/types";
import { FC } from "react"; 

const Modal: FC<{toggleVisible: (history?: string | unknown, location?: string | unknown) => void }> = ({ toggleVisible }) => {
  const history = useHistory();
  const location = useLocation();
  const { openPopup } = useSelector((state) => state);
  const closeModal = () => {
    toggleVisible(history, location);
  };
  return (
    <ModalOverlay toggleVisible={toggleVisible}>
      <div className={modal.modal}>
        <div className={modal.closeIcon + " mt-10 mr-10"} onClick={closeModal}>
          <CloseIcon type="primary" />
        </div>
        {openPopup.popup}
      </div>
    </ModalOverlay>
  );
};
// ModalOverlay.propTypes = {
//   toggleVisible: PropTypes.func,
//   onClose: PropTypes.func,
// };

export default Modal;
