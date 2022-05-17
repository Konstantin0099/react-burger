import PropTypes from "prop-types";
import { useHistory, useLocation } from "react-router-dom";
import modal from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
// import { useSelector } from "react-redux";
import { useSelector } from "../../services/types/types";
import { FC } from "react"; 
import {useDispatch} from 'react-redux';
import { TOGGLE_VISIBLE, VISIBLE_LIST } from "../../services/actions/modal";

// const Modal: FC<{toggleVisible: (history?: string | unknown, location?: string | unknown) => void }> = ({ toggleVisible }) => {
const Modal = () => {
  const { visible } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { openPopup } = useSelector((state) => state);
  const closeModal = () => {
    toggleVisible();
  };
  // const toggleVisible = (history?: string | unknown, location?: string | unknown) => {
  const toggleVisible = () => {
    // console.log("history", history);
    history.replace(visible.pathname);
    dispatch({ type: TOGGLE_VISIBLE });
    dispatch({ type: VISIBLE_LIST });
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
