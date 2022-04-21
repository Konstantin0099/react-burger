import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Route, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";

export function ProtectedRoute({ children, ...rest }) {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {}, []);
  const location = {
    pathname: "/login",
    state: {revert: `${history.location.pathname}`}
  };
  // console.log(" ProtectedRoute", history.location.pathname);
  return (
    <Route
      {...rest}
      render={() =>
        localStorage.getItem("refreshToken") ? (
          children
        ) : (
          // Если пользователя нет в хранилище, происходит переадресация на роут /login
          <Redirect to={location}/>
        )
      }
    />
  );
}

ProtectedRoute.propTypes = {
  children: PropTypes.object,
};