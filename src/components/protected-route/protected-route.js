import PropTypes from "prop-types";
import * as React from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";


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

