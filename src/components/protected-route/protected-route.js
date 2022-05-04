import PropTypes from "prop-types";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { getDataUser} from "../../services/thunk/data-user";
import { getToken } from "../../services/thunk/get-token";

export function ProtectedRoute({ children, ...rest }) {
  debugger;
// export function ProtectedRoute({ component, ...rest }) {
  const { authSuccess, name} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const params = useParams();
  const history = useHistory();
  React.useEffect(() => {
    console.log("ProtectedRoute__useEffect ", authSuccess);
    // name && dispatch(getDataUser(), getToken());
  }, []);
  const location = {
    pathname: "/login",
    state: {revert: `${history.location.pathname}`}
  };
  console.log("ProtectedRoute authSuccess history.location.pathname", authSuccess, history.location.pathname)
  console.log("ProtectedRoute rest", rest)
  console.log("Protected___params>", params);
  console.log("Protected___match>", match);
  console.log("Protected___history>", history);
  return (
    // children
    authSuccess ? children : <Redirect to={location}/>
    // <Route
    // {...rest}
    // render={() => {
    // let success1 = authSuccess 
    // ? children
    // // ? children
    // : <Redirect to={location}/>;
    //   console.log("ProtectedRoute__render", authSuccess, success1);
    //   return authSuccess ? children : <Redirect to={location}/>
    //   }}
    // />
  );
}

ProtectedRoute.propTypes = {
  children: PropTypes.object,
};