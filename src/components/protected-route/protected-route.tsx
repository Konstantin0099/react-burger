
import { FC, ReactElement } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useSelector } from "../../services/types/types";
export const ProtectedRoute: FC<{children: ReactElement<Element>; path: string | Array<string>}> = ({ children, ...rest }) => {
  const { authSuccess } = useSelector((state) => state.user);
  const history = useHistory();
  const location = {
    pathname: "/login",
    state: { revert: `${history.location.pathname}` },
  };
  return authSuccess ? children : <Redirect to={location} />;
};

