import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import Accordion from "../../components/Accordion";
import Modal from "../../components/Modal";
import { levelsData } from './levelsData';

import "./styles.scss";

export default function ExerciseCategory() {
  const { category } = useParams();
  const exercise = levelsData.exercises.find(exercise => exercise.link === category);
    
  const [selectedAccordion, setSelectedAccordion] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  // console.log(category);
  const toggleAccordion = (i) => {
    setSelectedAccordion(selectedAccordion === i ? null : i)
  }

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
    setIsModalVisible(true);
  }

  const handleMouseLeave = () => {
    setIsModalVisible(false)
    setHoveredLink(null);
  }

  
  return (
    <div className="block">
      {exercise && (
        <div className="block-content">
          <div className="block-nav">
            <button onClick={goBack} className="button-link">🠐 назад</button>
          </div>

          <h2>
            {exercise.title.charAt(0).toUpperCase() + exercise.title.slice(1)}. {exercise.subtitle.charAt(0).toUpperCase() + exercise.subtitle.slice(1)}
          </h2>

          <p className="intro">{exercise.intro}</p>

          <div className="main-content">
            <p className="side">
              {exercise.preface}
            </p>

            <table className="table side">
              <thead className="table-head">
                <tr className="table-row">
                  <th>Уровень</th>
                  <th>Упражнение</th>
                  <th>Условие перехода</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {exercise.levels.map(level => (
                  <tr key={level.level} className="table-row">
                    <td>{level.level}</td>
                    <td>
                      <Link
                        to={level.link}
                        onMouseEnter={(e) => handleMouseEnter(level.link, e)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {level.exerciseName.charAt(0).toUpperCase() + level.exerciseName.slice(1)}
                      </Link>
                      {isModalVisible && hoveredLink === level.link && (
                        <Modal
                          // position={cursorPosition}
                          link={level.link}
                          exerciseType={exercise.link}
                        />
                      )}
                    </td>
                    <td>{level.condition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


          <div className="additional-content">

            <h3>Дополнительная информация:</h3>

            <div className="accordion">
              {exercise.articles.map((item, i) => (

                <Accordion
                  key={i}
                  i={i}
                  title={item.title.charAt(0).toUpperCase() + item.title.slice(1)}
                  content={item.content}
                  isSelected={selectedAccordion === i}
                  onClick={toggleAccordion}
                />
              ))}
            </div>

          </div>

        </div>
      )
      }
    </div >
  )
}
