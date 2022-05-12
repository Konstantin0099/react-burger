import * as React from "react";
import { useHistory } from "react-router-dom";
import style from "./profile-form.module.css";
import { InputName } from "../input-name/input-name";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { getDataUser, setDataUser } from "../../services/thunk/data-user";

export const ProfileForm = () => {
  const { user, pass } = useSelector((state) => state);
  const email = user.email;
  const history = useHistory();
  const dispatch = useDispatch();
  const [newData, setNewData] = React.useState({ name: user.name, password: pass.password });
  const [fix, setFix] = React.useState(false);
  React.useEffect(() => {
    !user.name && dispatch(getDataUser());
  }, [dispatch, user.name]);

  const setData = (data, name) => {
    setNewData({ ...newData, [name]: data });
    setFix(true);
  };
  const setUser = (event) => {
    event.preventDefault();
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
            name={"пароль"}
            placeholder={"Пароль"}
            icon={"EditIcon"}
            value={newData.password}
            setData={setData}
          />
        </li>
        {fix && (
          <div className={style.btn__block + " mb-4"}>
            <Button type="primary" size="small">
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
