import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { FrontPage } from './pages/FrontPage';
import {ProjectsPage} from './pages/ProjectsPage';

export const App = () => {

  return (
    <BrowserRouter>
    <Routes>
    <Route path={"/"} element={<FrontPage/>}/>
      <Route path={"/projects"} element={<ProjectsPage/>}/>
      <Route path={"/links"} element={<FrontPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

