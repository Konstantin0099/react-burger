import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Route, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";

export function ProtectedRoute({ children, ...rest }) {
  const { authSuccess} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {}, []);
  const location = {
    pathname: "/login",
    state: {revert: `${history.location.pathname}`}
  };
  return (
    <Route
      {...rest}
      render={() =>
        authSuccess ? (
          children
        ) : (
          <Redirect to={location}/>
        )
      }
    />
  );
}

ProtectedRoute.propTypes = {
  children: PropTypes.object,
};