import React from "react";

import "./styles.scss";

export default function Accordion({ i, title, content, isSelected, onClick }) {


  return (

    <>

      <div className={isSelected ? "accordion-item show" : "accordion-item"}>

        <div className="accordion-title" onClick={() => onClick(i)}>
          <h4>{title}</h4>
          <span className={isSelected ? "icon-open" : "icon"}>+</span>
        </div>

        <div className={isSelected ? "accordion-content show" : "accordion-content"}>
          {content.split('\n').map((paragraph, index) => (
            paragraph.startsWith('*') === true ?
              <li key={index}><span>{paragraph.replace('*', '')}</span></li>
              :
              <p key={index}>{paragraph}</p>
          ))}

        </div>

      </div>


    </>
  )
}