import './App.css';
import React from 'react';
import Navbar from './components/navbar.js';
import ContentHero from './components/content-hero.js';
import Projects from './components/projects.js';
import Aboutme from './components/aboutme.js';
import Contactme from './components/contactme.js';
import Footer from './components/footer';
function App() {
  return (
<>
      <Navbar />
      <ContentHero />
      <Projects />
      <Aboutme />
      <Contactme />
      <Footer />

</>

 
  );
}

export default App;
