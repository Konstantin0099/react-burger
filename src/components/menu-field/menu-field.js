
//   import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "../../pages/style.module.css";

 /** поле меню для перехода по ссылке  */
export  const MenuField = ({ title, link }) => {
    return (
      <>
        <h3 className={"text text_type_main-default"}>
          {title && (title + "  ")}
          <Link
            to={"#"}
            className={"text text_type_main-default " + style.link}
          >
            {link}
          </Link>
        </h3>
      </>
    );
  };