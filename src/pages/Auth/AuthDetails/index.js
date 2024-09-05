import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { auth } from '../../../firebase'
import { clearAuthUser, setAuthUser } from "../../../features/auth/authSlice";

import './styles.scss';

export function AuthDetails() {
  const dispatch = useDispatch();
  const authUser = useSelector(state => state.auth.authUser);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setAuthUser(user))
      } else {
        dispatch(clearAuthUser())
      }
    });
    return () => {
      listen()
    };
  }, [dispatch]);

  function userSignOut() {
    signOut(auth)
      .then(() => console.log("Успешно!"))
      .catch((e) => console.log(e));
  }

  return (
    <>
      {authUser ?
        (
          <div className="auth-details">
            <p>{`Вы вошли как ${authUser.email}`}</p>
            <button className="auth-button" onClick={userSignOut}>Выйти</button>
          </div>
        ) : (
          <div className="auth-details">
            <p>Вы не авторизованы</p>
          </div>
        )}

    </>
  )
}