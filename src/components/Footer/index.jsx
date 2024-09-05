import React from "react";

import './styles.scss';

export function Footer() {
  const year = new Date();

  return (
    <footer className="app-footer">
      <p>
        {year.getFullYear()}
      </p>
    </footer>
  )
}