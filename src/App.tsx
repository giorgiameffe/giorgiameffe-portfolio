import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import Header from './components/Header';

const App: React.FC = () => {

  return (

    <BrowserRouter>
      <Header logoName='Giorgia Meffe' />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/projects/:slug' element={<ProjectDetailsPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;