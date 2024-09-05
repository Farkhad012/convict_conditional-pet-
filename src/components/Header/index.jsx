import React from "react";
import { NavLink } from "react-router-dom";

import { PathName } from '../../constants/index';
import { Logo } from "../Logo";

import './styles.scss';


export function Header() {
  return (
    <header className="app-header">
      <div className="container">
        <Logo />

        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <NavLink to={PathName.ProgramList} className="header__nav-link">Тренировочные программы</NavLink>
            </li>|
            <li className="header__nav-item">
              <NavLink to={PathName.ArticleList} className="header__nav-link">Мудрость тела</NavLink>
            </li>|
            <li className="header__nav-item">
              <NavLink to={PathName.ExerciseList} className="header__nav-link">Большая шестёрка</NavLink>
            </li>|
            <li className="header__nav-item">
              <NavLink to={PathName.Diary} className="header__nav-link">Тренировочный дневник</NavLink>
            </li>|
            <div className="header__nav-item">
              <li className="header__nav-item">
                <NavLink to={PathName.SignIn} className="header__nav-link">Войти</NavLink>
              </li>/
              <li className="header__nav-item">
                <NavLink to={PathName.SignUp} className="header__nav-link">Регистрация</NavLink>
              </li>
            </div>
          </ul>
          {/* <div class="burger__menu-icon">
              <span></span>
              <span></span>
              <span></span>
            </div> */}
        </nav>
      </div>
    </header>
  )
}