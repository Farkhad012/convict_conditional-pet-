import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { auth } from '../../../firebase'

import './styles.scss';

export default function AuthDetails() {
  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    });
    return () => {
      listen()
    };
  }, []);

  function userSignOut () {
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