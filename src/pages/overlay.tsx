import { FC } from "react"; 
import style from "./overlay.module.css";

export const Overlay: FC = ({ children }) => {
  return <div className={style.overlay}>{children}</div>;
};
