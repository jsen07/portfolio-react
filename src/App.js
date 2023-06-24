import './App.css';
import React from 'react';
import Navbar from './components/navbar.js';
import ContentHero from './components/content-hero.js';
import Projects from './components/projects.js';
import Aboutme from './components/aboutme.js';
function App() {
  return (
<>
      <Navbar />
      <ContentHero />
      <Projects />
      <Aboutme />

</>

 
  );
}

export default App;
