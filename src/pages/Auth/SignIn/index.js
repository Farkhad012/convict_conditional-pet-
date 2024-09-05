import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase';

import { AuthDetails } from "../AuthDetails";

import './styles.scss';
import { setAuthUser } from "../../../features/auth/authSlice";

export function SignIn() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("")

  function logIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log("user");
        dispatch(setAuthUser(user));
        setStatus(`Вы зашли под ${email}`);
        setEmail("")
        setPassword("")
      })
      .catch((error) => {
        console.log(error)
        setStatus("Аккаунт не найден")
      });

  }

  return (
    <div className="block">

      <div className="auth-header">
        <h2>Вход в аккаунт</h2>
        <AuthDetails />
      </div>

      <form
        className="auth">
        <p className={status === "Аккаунт не найден" ? "status error" : "status success"}>{status}</p>
        <input
          className={status === "Аккаунт не найден" ? "auth-input error" : "auth-input"}
          placeholder="Введите email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email" />
        <input
          className="auth-input"
          placeholder="Введите пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password" />
        <button
          onClick={logIn}
          className="auth-button"
        >
          Войти
        </button>

      </form>

    </div>
  )
} 