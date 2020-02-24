import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import Footer from './components/Footer/Footer.js'
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
