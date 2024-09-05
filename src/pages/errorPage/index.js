import React from "react";

import "./styles.scss";

export default function ErrorPage({ errorMessage }) {
  return (
    <div className="block error">
      <p className="error-title">Error:</p>
      <p className="error-message">{errorMessage}</p>
    </div>
  )
}