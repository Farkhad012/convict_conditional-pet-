import React from "react";
import { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from '../../../firebase';

import './styles.scss';


export function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copyPassword, setCopyPassword] = useState("");
  const [status, setStatus] = useState("")

  function register(e) {
    e.preventDefault();
    if (password !== copyPassword) {
      setStatus("Пароли не совпадают!")
      return
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log("user");
        setStatus("Аккаунт создан")
        setEmail("")
        setPassword("")
        setCopyPassword("")
      })
      .catch((error) => console.log(error));

  }

  return (
    <div className="container block">
      <h2>Создание нового аккаунта</h2>

      <form
        className="auth"
        onSubmit={register}>
        <p className={status === "Пароли не совпадают!" ? "status error" : "status success"}>{status}</p>
        <input
          className="auth-input"
          placeholder="Введите email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email" />
        <input
          className={status === "Пароли не совпадают!" ? "auth-input error" : "auth-input"}
          placeholder="Придумайте пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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