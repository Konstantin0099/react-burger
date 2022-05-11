
import PropTypes from "prop-types";
import * as React from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory,  useRouteMatch } from "react-router-dom";


// export function ProtectedRoute({ children, ...rest }) {
export const ProtectedRoute = ({ children, ...rest }) => {
  const routeMatch = useRouteMatch();
  const { authSuccess } = useSelector((state) => state.user);
  const history = useHistory();
  // React.useEffect(() => {}, []);
  const location = {
    pathname: "/login",
    state: { revert: `${history.location.pathname}` },
  };
  // const {
  //   params: { id },
  // } = routeMatch;
  // console.log("ProtectedRoute........................routeMatch= history=", routeMatch, history);
  // let di = 1000
  return authSuccess ? children : <Redirect to={location} />;
}

ProtectedRoute.propTypes = {
  children: PropTypes.object,
};

