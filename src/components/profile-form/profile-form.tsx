import React, { FC } from "react";
import style from "./profile-form.module.css";
import { InputName } from "../input-name/input-name";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { getDataUser, setDataUser } from "../../services/thunk/data-user";
import { useSelector, TSetData, useDispatch, TNewData } from "../../services/types/types";

export const ProfileForm: FC<{ set: () => void }> = ({ set }) => {
  const { user, pass } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [newData, setNewData] = React.useState<Omit<TNewData, "token">>({
    name: user.name,
    password: pass.password,
    email: user.email,
  });
  const [fix, setFix] = React.useState<boolean>(false);
  React.useEffect(() => {
    dispatch(getDataUser());
  }, [dispatch]);

  const setData: TSetData = (data, name) => {
    setNewData({ ...newData, [name]: data });
    setFix(true);
  };
  const setUser = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(setDataUser(set, newData));
  };
  const cancelInput: () => void = () => {
    setNewData({ name: user.name, password: pass.password, email: user.email });
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
          <InputName disabled={true} type={"email"} name={"email"} placeholder={"Логин"} value={user.email} />
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
