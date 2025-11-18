import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import DefaultLayout from './layouts/DefaultLayout';
import GlobalContext from './contexts/GlobalContext';
import { useState } from 'react';

const App: React.FC = () => {

  const [isDark, setIsDark] = useState(false);

  return (

    <GlobalContext.Provider value={{
      isDark,
      setIsDark
    }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/projects/:slug' element={<ProjectDetailPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contacts' element={<ContactsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </GlobalContext.Provider>
  );
};

export default App;