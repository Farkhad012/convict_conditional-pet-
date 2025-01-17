import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { setEmail, setPassword, setStatus } from "../../../features/signUp/signUpSlice";

import { auth } from '../../../firebase';

import './styles.scss';


export function SignUp() { 
 const dispatch = useDispatch();

 const email = useSelector(state => state.signUp.email);
 const password = useSelector(state => state.signUp.password);
 const status = useSelector(state => state.signUp.status);
 
  const [copyPassword, setCopyPassword] = useState("");
 
  function register(e) {
    e.preventDefault();
    if (password !== copyPassword) {
      dispatch(setStatus("Пароли не совпадают!"))
      return
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log("user");
        dispatch(setStatus(`Аккаунт ${email} создан`))
        dispatch(setEmail(""))
        dispatch(setPassword(""))
        setCopyPassword("")
      })
      .catch((error) => console.log(error));

  }

  return (
    <div className="block">
      <h2>Создание нового аккаунта</h2>

      <form
        className="auth"
        onSubmit={register}>
        <p className={status === "Пароли не совпадают!" ? "status error" : "status success"}>{status}</p>
        <input
          className="auth-input"
          placeholder="Введите email"
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
          type="email" />
        <input
          className={status === "Пароли не совпадают!" ? "auth-input error" : "auth-input"}
          placeholder="Придумайте пароль"
          value={password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
          type="password" />
        <input
          className={status === "Пароли не совпадают!" ? "auth-input error" : "auth-input"}
          placeholder="Повторите пароль"
          value={copyPassword}
          onChange={(e) => setCopyPassword(e.target.value)}
          type="password" />
        <button className="auth-button">Создать</button>
      </form>

    </div>
  )
} 