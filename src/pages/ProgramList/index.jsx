import programmesData from './programmes.json';

import LinkBtn from "../../components/LinkBtn";

import './styles.scss';

export function ProgramList() {
  return (
    <>
      <h2>Тренировочные программы:</h2>
      <div className="block-content">
        {programmesData.programmes.map(program => (
          <LinkBtn
            key={program.id}
            textBtn={program.title.toUpperCase()}
            link={program.link}
          />
        ))}
      </div>
    </>
  );
}
