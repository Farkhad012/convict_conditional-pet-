import { NavLink, Outlet } from "react-router-dom";

import { PathName } from '../constants/routes';

import './styles.scss';


export default function Layout() {
  return (
    <>
      <header className="app-header">
        <div className="container">
          <NavLink to={PathName.Home} >
            <h1 className="logo">
              <span>Тренировочная</span>
              <br />
              <span>зона</span>
              <br />
              <span>(Convict Conditional)</span>
            </h1>
          </NavLink>

          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <NavLink to={PathName.ProgramList} className="header__nav-link">Тренировочные программы</NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink to={PathName.ArticleList} className="header__nav-link">Мудрость тела</NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink to={PathName.ExerciseList} className="header__nav-link">Большая шестёрка</NavLink>
              </li>
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

      <div className="main">
        <div className="container">
          <Outlet />
        </div>
      </div>

      <footer className="app-footer">2024 all right reserved</footer>
    </>
  )
}