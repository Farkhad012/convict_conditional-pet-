import React from "react";

import "./styles.scss";

export default function ({ className, title }) {
  return (
    <button className={`button` + className}>{title}</button>
  )
} 