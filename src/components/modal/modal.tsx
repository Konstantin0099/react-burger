
import { useHistory } from "react-router-dom";
import modal from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useSelector, useDispatch } from "../../services/types/types";
import { FC } from "react"; 
import { TOGGLE_VISIBLE, VISIBLE_LIST } from "../../services/actions/modal";

const Modal: FC = () => {
  const { visible } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const { openPopup } = useSelector((state) => state);
  const closeModal: () => void = () => {
    toggleVisible();
  };

  const toggleVisible: () => void = () => {
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
export default Modal;
