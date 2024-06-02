// В Modal/index.jsx
import React from "react";

import { exerciseData } from "../../pages/ExerciseDetails/exerciseData";

import './styles.scss'

const getExerciseData = (link, exerciseType) => {
  const exercisesOfType = exerciseData[exerciseType];
  if (exercisesOfType) {

    const exercise = exercisesOfType.find(ex => ex.id === parseInt(link.split('/').pop()));
    if (exercise) {

      return exercise;
    }
  }
  return null;
}

export default function Modal({ link, exerciseType }) {
  const exercise = getExerciseData(link, exerciseType);
  console.log(link)
  console.log(exerciseType)

  if (!exercise) {
    return null;
  }

  console.log(exercise);
  const { imgA, imgB, imgC } = exercise;

  return (
    <div className="modal">
      <div className="exercise-demonstration">
        {imgA ? <img src={imgA} alt={`${exercise.title} A`} /> : ""}
        {imgB ? <img src={imgB} alt={`${exercise.title} B`} /> : ""}
        {imgC ? <img src={imgC} alt={`${exercise.title} C`} /> : ""}
      </div>
    </div>
  );
}
