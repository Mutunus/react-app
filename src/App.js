import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import Footer from './components/Footer/Footer.js'
import MainContent from './components/MainContent/MainContent';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <NavBar/>
        <MainContent/>
        <Footer/>
      </div>
    );
  }



}

export default App;


// USEFUL LINKS 

// SUPPORTED EVENTS https://reactjs.org/docs/events.html#supported-events
// FORMS https://reactjs.org/docs/forms.html