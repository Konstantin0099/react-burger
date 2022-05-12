import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

export const ProtectedRoute = ({ children, ...rest }) => {
  const { authSuccess } = useSelector((state) => state.user);
  const history = useHistory();
  const location = {
    pathname: "/login",
    state: { revert: `${history.location.pathname}` },
  };
  return authSuccess ? children : <Redirect to={location} />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.object,
};
