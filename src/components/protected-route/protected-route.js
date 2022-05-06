import PropTypes from "prop-types";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { getDataUser, setDataUser } from "../../services/thunk/data-user";
// import { getToken } from "../../services/thunk/get-token";
import { AUTH_LOGIN } from "../../services/actions/user-auth";

export function ProtectedRoute({ children, ...rest }) {
  const { authSuccess } = useSelector((state) => state.user);
  const history = useHistory();
  React.useEffect(() => {}, []);
  const location = {
    pathname: "/login",
    state: { revert: `${history.location.pathname}` },
  };

  return authSuccess ? children : <Redirect to={location} />;
}

ProtectedRoute.propTypes = {
  children: PropTypes.object,
};

