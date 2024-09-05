import { levelsData } from "../../pages/ExerciseCategory/levelsData";

import './styles.scss';

export default function DropdownMenu({ openMenu, toggleMenu, selectedExercise, handleMouseEnter, handleMouseLeave, handleClick, openSubMenu }) {
  return (
    <div className="drop-down selection__item">
      <button className={`drop-down__title ${openMenu ? "open" : ""}`} onClick={toggleMenu}>
        <span>{selectedExercise || "--- выберите упражнение ---"}</span>
        <div className={`drop-down__title-logo ${openMenu ? "open" : ""}`}></div>
      </button>
      <ul className={`drop-down__menu ${openMenu ? "open" : ""}`}>
        {levelsData.exercises.map(exercise => (
          <li
            key={exercise.id}
            className="drop-down__menu-item"
            onMouseEnter={() => handleMouseEnter(exercise.id)}
            onMouseLeave={() => handleMouseLeave(exercise.id)}
          >
            {exercise.title.charAt(0).toUpperCase() + exercise.title.slice(1)}
            <div className={`drop-down__menu-item_logo ${openSubMenu ? "open" : ""}`}></div>
            {openSubMenu[exercise.id] && (
              <ul className={`sub-menu ${openSubMenu ? "open" : ""}`}>
                {exercise.levels.map((level, index) => (
                  <li key={index} className="sub-menu__item" onClick={() => handleClick(exercise, level)}>
                    <div>{level.level}</div>
                    {level.exerciseName.charAt(0).toUpperCase() + level.exerciseName.slice(1)}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
