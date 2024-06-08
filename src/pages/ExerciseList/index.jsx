import { levelsData } from '../ExerciseCategory/levelsData';
import LinkBtn from "../../components/LinkBtn";

import './styles.scss';

export function ExerciseList() {
  return (
    <section className="block">
      <h2>Большая шестерка: Силовые упражнения</h2>
      <div className="block-content">
        {levelsData.exercises.map(exercise => (
          <LinkBtn
            key={exercise.id}
            textBtn={exercise.title.toUpperCase()}
            link={exercise.link}
          />
        ))}
      </div>
    </section>
  );
}
