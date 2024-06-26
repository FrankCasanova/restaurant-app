import React from 'react';
import { hoverButton, hoverAncor, clickMenu, clickButton, playBackGroundMusic } from './playSounds.js';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => {
  hoverAncor();
  hoverButton();
  clickMenu();
  clickButton();
  playBackGroundMusic();
  
  return (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);
}
export default App;
