import { Routes, Route } from 'react-router-dom';

import { PathName } from './constants';

import Layout from './Layout';
import HomePage from './pages/HomePage';
import ProgramList from './pages/ProgramList';
import ArticleList from './pages/ArticleList';
import ExerciseList from './pages/ExerciseList';
import ExerciseCategory from './pages/ExerciseCategory';
import ProgramDetails from './pages/ProgramDetails';
import ExerciseDetails from './pages/ExerciseDetails';

import './App.scss';
import ArticleDetails from './pages/ArticleDetails';

function App() {
  return (
    <div className="app">

      <Routes>

        <Route path={PathName.Home} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={PathName.ProgramList} element={<ProgramList />} />
          <Route path={PathName.ProgramDetails} element={<ProgramDetails />} />
          <Route path={PathName.ArticleList} element={<ArticleList />} />
          <Route path={PathName.ArticleDetails} element={<ArticleDetails />} />
          <Route path={PathName.ExerciseList} element={<ExerciseList />} />
          <Route path={PathName.ExerciseCategory} element={<ExerciseCategory />} />
          <Route path={PathName.ExerciseDetails} element={<ExerciseDetails />} />
        </Route>

      </Routes>
      

    </div>
  );
}

export default App;
