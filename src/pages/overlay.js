import PropTypes from "prop-types";
import style from "./overlay.module.css";

export const Overlay = ({ children }) => {
  return <div className={style.overlay}>{children}</div>;
};

Overlay.propTypes = {
  children: PropTypes.object,
};
