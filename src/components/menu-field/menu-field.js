
//   import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "../../pages/style.module.css";

 /** поле меню для перехода по ссылке  */
export  const MenuField = ({ title, linkName, link }) => {
    return (
      <>
        <h3 className={"text text_type_main-default"}>
          {title && (title + "  ")}
          <NavLink
            to={{ pathname: `/${link}` }}
            className={"text text_type_main-default " + style.link}
            activeClassName={style.link_active}
          >
            {linkName}
          </NavLink>
        </h3>
      </>
    );
  };