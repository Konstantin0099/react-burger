import PropTypes from "prop-types";
import * as React from "react";
import { useParams, useRouteMatch, useLocation, useHistory } from "react-router-dom";
import style from "./profile-form.module.css";
import { InputName } from "../input-name/input-name";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { getDataUser, setDataUser } from "../../services/thunk/data-user";
import { getToken } from "../../services/thunk/get-token";

export const ProfileForm = () => {
  const { user, pass } = useSelector((state) => state);
  const email = user.email
  const history = useHistory();
  const params = useParams();
  const match = useRouteMatch();
  const location = useLocation();
  const dispatch = useDispatch();
  const [newData, setNewData] = React.useState({ name: user.name, password: pass.password });
  const [fix, setFix] = React.useState(false);
  React.useEffect(() => {
    console.log("ProfileForm__useEffect user.name && dispatch(getDataUser(), getToken())>");
    user.name && dispatch(getDataUser(), getToken());
  }, []);

  const setData = (data, name) => {
    setNewData({ ...newData, [name]: data });
    setFix(true);
  };
  const setUser = () => {
    history.replace({ state: { revert: "/" } });
    dispatch(setDataUser(history, newData));
  };
  const cancelInput = () => {
    setNewData({ name: user.name, password: pass.password });
    setFix(false);
  };

  return (
    <form onSubmit={setUser}>
      <ul className={style.list}>
        <li className={style.field + " mb-4"}>
          <InputName
            type={"text"}
            placeholder={"Имя"}
            icon={"EditIcon"}
            name={"name"}
            value={newData.name}
            setData={setData}
          />
        </li>
        <li className={style.field + " mb-4"}>
          <InputName disabled={true} type={"email"} name={"email"} placeholder={"Логин"} value={email} />
        </li>
        <li className={style.field + " mb-4"}>
          <InputName
            type={"password"}
            name={"password"}
            placeholder={"Пароль"}
            icon={"EditIcon"}
            value={newData.password}
            setData={setData}
          />
        </li>
        {fix && (
          <div className={style.btn__block + " mb-4"}>
            <Button type="primary" size="small" onClick={setUser}>
              Сохранить
            </Button>
            <Button type="primary" size="small" onClick={cancelInput}>
              &nbsp;&nbsp;Отмена&#160;
            </Button>
          </div>
        )}
      </ul>
    </form>
  );
};

// ProfileForm.propTypes = {
//   email: PropTypes.string,
//   user: PropTypes.string,
//   pass: PropTypes.string,
// };
