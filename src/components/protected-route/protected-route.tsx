
import { FC, ReactElement } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useSelector } from "../../services/types/types";
import { History } from "history";
export const ProtectedRoute: FC<{children: ReactElement<Element>; path?: string | Array<string>; exact: boolean}> = ({ children, ...rest }) => {
  const { user } = useSelector((state) => state);
  const history: History<unknown> = useHistory();
  const location = {
    pathname: "/login",
    state: { revert: `${history.location.pathname}` },
  };
  return user.authSuccess ? children : <Redirect to={location} />;
};

