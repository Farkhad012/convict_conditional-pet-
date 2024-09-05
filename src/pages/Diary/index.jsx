import React, { useEffect, useState } from "react";
import './styles.scss';

import DropdownMenu from "../../components/DropDownMenu";
import ExerciseItem from "../../components/ExerciseItem";

export function Diary() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState({});
  const [selectedExercise, setSelectedExercise] = useState("");
  const [todo, setTodo] = useState({
    exerciseName: "упражнение не выбрано",
    approachCount: "1",
    repeatCount: "1",
    status: ""
  });

  useEffect(() => {
    const savedTodo = localStorage.getItem('todo');
    if (savedTodo) {
      setTodo(JSON.parse(savedTodo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo))
  }, [todo]);


  const [exerciseList, setExerciseList] = useState([]);

  const toggleMenu = () => setOpenMenu(!openMenu);

  const handleMouseEnter = (id) => {
    setOpenSubMenu((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id) => {
    setOpenSubMenu((prev) => ({ ...prev, [id]: false }));
  };

  const handleClick = (exercise, level) => {
    const exerciseName = `${level.exerciseName.charAt(0).toUpperCase() + level.exerciseName.slice(1)}`;
    setTodo(prev => ({ ...prev, exerciseName }));
    setSelectedExercise(exerciseName);
    setOpenMenu(false);
    setOpenSubMenu({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo(prev => ({ ...prev, [name]: value }));
  };

  const handleStatusChange = (status) => setTodo(prev => ({ ...prev, status }));

  const handleAddExercise = () => {
    setExerciseList(prev => [...prev, todo]);
    setTodo({
      exerciseName: "",
      approachCount: "1",
      repeatCount: "1",
      status: ""
    });
    setSelectedExercise("");
  };


  const handleDeleteExercise = (index) => {
    setExerciseList(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <h2>Тренировочный дневник</h2>
      <div className="column-direction exercise-selection">
        <h3>Упражнения</h3>
        <div className="selection__exercise">
          <div className="selection__field">
            <DropdownMenu
              openMenu={openMenu}
              toggleMenu={toggleMenu}
              selectedExercise={selectedExercise}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              handleClick={handleClick}
              openSubMenu={openSubMenu}
            />
            <div className="selection__item">
              <input
                className="selection__input-number"
                type="number"
                name="approachCount"
                min="1"
                value={todo.approachCount}
                onChange={handleChange}
                placeholder="подходы"
              /> /
              <input
                className="selection__input-number"
                type="number"
                name="repeatCount"
                min="1"
                value={todo.repeatCount}
                onChange={handleChange}
                placeholder="повторы"
              />
            </div>
            <div className="selection__item">
              <button
                className={`button selection__input-type ${todo.status === "разминка" ? "active" : ""}`}
                onClick={() => handleStatusChange("разминка")}
              >
                разминка
              </button>
              или
              <button
                className="button selection__input-type"
                onClick={() => handleStatusChange("упражнение")}
              >
                упражнение
              </button>
              ?
            </div>
          </div>
          <button className="button selection__button" onClick={handleAddExercise}>
            Добавить
          </button>
        </div>
        <h3>Cписок упражнений:</h3>
        <ul className="exercise-list">
          <div className="exercise-list__row">
            <li className="exercise-list__item exercise-list__title">
              <div className="exercise-list__item-name">Упражнение</div>
              <div className="exercise-list__item-count">
                <div>Подходы</div> / <div>Повторы</div>
              </div>
              <div className="exercise-list__item-status">Статус</div>
            </li>
          </div>
          {exerciseList.map((exercise, index) => (
            <ExerciseItem key={index} exercise={exercise} index={index} handleDeleteExercise={handleDeleteExercise} />
          ))}
        </ul>
      </div>
      <div className="field column-direction exercise-comments">
        <h3>Комментарии</h3>
        <div>поле для комментариев</div>
      </div>
    </>
  );
}
