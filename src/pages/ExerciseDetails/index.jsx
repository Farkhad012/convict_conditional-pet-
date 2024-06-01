import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { exerciseData } from './exerciseData';

import './styles.scss';

export default function ExerciseDetails() {
  const { link, category } = useParams();
  const navigate = useNavigate();

  const [exercise, setExercise] = useState(null);

  const goBack = () => navigate(-1);

  useEffect(() => {
    const selectedExercise = exerciseData[category].find(levelItem => levelItem.id === Number(link));
    setExercise(selectedExercise);
  }, [link, category]);

  console.log(exerciseData[category])
  console.log(category)

  return (
    <div className="block">
      {exercise && (
        <div className="container block-content">
          <div className="block-nav">
            <button onClick={goBack} className="button-link">🠐 назад</button>
          </div>
          <h2>{exercise.id} уровень. {exercise.title.charAt(0).toUpperCase() + exercise.title.slice(1)}</h2>
          <div className="block-content exercise-details">
            <div className="exercise-theory side">
              <h3>Выполнение</h3>
              <p>{exercise.process}</p>
              <h3>Упражнение в разрезе</h3>
              <p>{exercise.cut}</p>
              <h3>Тренировочная норма</h3>
              <table className="table">
                <tbody className="table-body">
                  <tr className="table-row">
                    <td className="button-link">Начальный уровень</td>
                    <td>{exercise.norm.elementary}</td>
                  </tr>
                  <tr className="table-row">
                    <td className="button-link">Средний уровень</td>
                    <td>{exercise.norm.intermediate}</td>
                  </tr>
                  <tr className="table-row">
                    <td className="button-link">Продвинутый уровень</td>
                    <td>{exercise.norm.advanced}</td>
                  </tr>
                </tbody>
              </table>
              <h3>Улучшение техники</h3>
              <p>{exercise.improvement}</p>
            </div>
            <div className="exercise-practice side">
              <h3>Демонстрация</h3>
              <div className="exercise-demonstration">
                <img src={exercise.imgA} alt={`${exercise.title.charAt(0).toUpperCase() + exercise.title.slice(1)} А`} />
                <img src={exercise.imgB} alt={`${exercise.title.charAt(0).toUpperCase() + exercise.title.slice(1)} Б`} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}