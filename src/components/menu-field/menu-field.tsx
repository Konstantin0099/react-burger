// import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import style from "../../pages/style.module.css";
import { FC } from "react";

/** поле меню для перехода по ссылке  */
export const MenuField: FC<{ title: string; linkName: string; link: string }>  = ({ title, linkName, link }) => {
  return (
    <>
      <h3 className={style.question_text + " text text_type_main-default"}>
        {title && title + "  "}
        <NavLink
          to={{ pathname: `/${link}`, state: { revert: "/" } }}
          className={"text text_type_main-default " + style.link}
          activeClassName={style.link_active}
        >
          {linkName}
        </NavLink>
      </h3>
    </>
  );
};

// MenuField.propTypes = {
//   title: PropTypes.string,
//   linkName: PropTypes.string,
//   link: PropTypes.string,
// };