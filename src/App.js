import { Routes, Route } from 'react-router-dom';

import { PathName } from './constants';
import {
  HomePage,
  SignIn,
  SignUp,
  AuthDetails,
  ProgramList,
  ProgramDetails,
  ArticleList,
  ArticleDetails,
  ExerciseList,
  ExerciseCategory,
  ExerciseDetails,
  Diary
} from './pages';

import Layout from './layout';

import './App.scss';


function App() {
  return (
    <div className="app">

      <Routes>

        <Route path={PathName.Home} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={PathName.SignIn} element={<SignIn />} />
          <Route path={PathName.SignUp} element={<SignUp />} />
          <Route path={PathName.AuthDetails} element={<AuthDetails />} />
          <Route path={PathName.ProgramList} element={<ProgramList />} />
          <Route path={PathName.ProgramDetails} element={<ProgramDetails />} />
          <Route path={PathName.ArticleList} element={<ArticleList />} />
          <Route path={PathName.ArticleDetails} element={<ArticleDetails />} />
          <Route path={PathName.ExerciseList} element={<ExerciseList />} />
          <Route path={PathName.ExerciseCategory} element={<ExerciseCategory />} />
          <Route path={PathName.ExerciseDetails} element={<ExerciseDetails />} />
          <Route path={PathName.Diary} element={<Diary />} />
        </Route>

      </Routes>


    </div>
  );
}

export default App;
