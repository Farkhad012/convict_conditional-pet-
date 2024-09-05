import { Link } from "react-router-dom";

import './styles.scss';
// ExerciseItem Component
export default function ExerciseItem({ exercise, index, handleDeleteExercise }) {
  return (
    <div className="exercise-list__row">
      <li key={index} className="exercise-list__item">
        <Link to={exercise.link} className="exercise-list__item-name">
          {exercise.exerciseName || "(не выбрано)"}
        </Link>
        <div className="exercise-list__item-count">
          <div>{exercise.approachCount}</div> / <div>{exercise.repeatCount || "(не выбран)"}</div>
        </div>
        <div className={`exercise-list__item-status ${exercise.status === "разминка" ? "warm-up" : "training"}`}>
          {exercise.status || "(не выбран)"}
        </div>
      </li>
      <button className="exercise-list__item-button" onClick={() => handleDeleteExercise(index)}>+</button>
    </div>
  );
};
