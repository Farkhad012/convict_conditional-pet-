import React from "react";

import { Outlet } from "react-router";

import './styles.scss';

export function Main() {
  return (
    <>
      <div className="main">
        <div className="container">
          <section className="block">
            <Outlet />
          </section>
        </div>
      </div>
    </>
  )
}