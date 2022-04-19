import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function ProtectedRoute({ children, ...rest }) {
    const { user } = useSelector((state) => state);
    const dispatch = useDispatch();
//     const init = async () => {
//     await getUser();
//   };
useEffect(() => {
  }, [user]);

console.log(" ProtectedRoute");
    return (
    <Route
      {...rest}
      render={() =>
        localStorage.getItem("refreshToken") ? (
        // user.authSuccess ? (
          children
        ) : (
                    // Если пользователя нет в хранилище, происходит переадресация на роут /login
                    <Redirect
                        to='/login'
          />
                )
      }
    />
  );
} 
