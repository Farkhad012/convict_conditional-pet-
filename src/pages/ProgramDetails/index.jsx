import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import programmesData from '../ProgramList/programmes.json';

import './styles.scss';

export default function ProgramDetails() {
  const { link } = useParams();
  const navigate = useNavigate();
  const [programm, setProgramm] = useState(null);

  useEffect(() => {
    const selectedProgramm = programmesData.programmes.find(programm => programm.link === link);
    setProgramm(selectedProgramm);
  }, [link]);

  const goBack = () => navigate(-1);

  return (
    <section className="block">
      {programm &&
        <div className="container block-content">

          <div className="block-nav">
            <button onClick={goBack} className='button-link'>🠐 назад</button>
          </div>

          <h2>{programm.title}</h2>

          <div className="side">

            <div className="description">
              <h3>Описание программы:</h3>
              <p>{programm.description}</p>
            </div>
            <div className="description">
              <h3>Особенности:</h3>
              {programm.features.map(feature => <p className='features'>{feature}</p>)}
            </div>
          </div>
          <div className="side">
            <h3>Расписание:</h3>
            <table className="table">

              <thead className="table-head">
                <tr className="table-row">
                  <td>День</td>
                  <td>Упражнение</td>
                  <td>Количество подходов</td>
                </tr>
              </thead>

              <tbody className="table-body">
                {programm.content.map((item => (
                  <tr className="table-row">
                    <td className="table-sidewall">{item.day}</td>
                    <td>
                      {item.activity.map((active) => (
                        active.exercise !== "Отдых" ?
                          <Link to={`/exerciseList/${active.link}`}>
                            {active.exercise}
                            <br />
                          </Link> : "Отдых"
                      ))}
                    </td>
                    <td>
                      {item.activity.map((active) => (
                        active.exercise !== "Отдых" ?
                          <>
                            {active.count}
                            <br />
                          </> : ""
                      ))}
                    </td>
                  </tr>
                )))}
              </tbody>
            </table>
          </div>
        </div>
      }

    </section>
  );
}
