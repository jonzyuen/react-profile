import React, { useState } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  // const [homeSelected, setHomeSelected] = useState(false);
  const [projectsSelected, setProjectsSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className='App'>
      <Header
        // homeSelected = { homeSelected }
        // setHomeSelected = { setHomeSelected }
        projectsSelected = { projectsSelected }
        setProjectsSelected = { setProjectsSelected }
        aboutSelected = { aboutSelected }
        setAboutSelected = { setAboutSelected }
        contactSelected = { contactSelected }
        setContactSelected= { setContactSelected }
      />

      {!projectsSelected && !contactSelected && !aboutSelected ? (
        <>
          <Home />
        </>
      ) : projectsSelected ? (
        <Projects />
      ) : aboutSelected ? (
        <About />
      ) : contactSelected ? (
        <Contact />
      ) : (
        <Projects />
      )}

      {/* {projectsSelected ? (
        <Projects />
      ) : contactSelected ? (
        <Contact />
      ) : (
        <Home />
      )} */}

      <Footer />
    </div>
  );
};

export default App;
