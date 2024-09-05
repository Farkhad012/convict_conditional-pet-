import React from "react";
import { NavLink } from "react-router-dom";

import { PathName } from "../../constants";

import logo from "../../assets/images/icons/logo.png";

import './styles.scss';

export function Logo() {
  return (
    <>
      <NavLink to={PathName.Home} className="logo-wrapper">
        <img src={logo} className="logo" />
      </NavLink>
    </>
  )
}