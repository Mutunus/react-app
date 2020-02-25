import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import Footer from './components/Footer/Footer.js'
import MainContent from './components/MainContent/MainContent';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [
        { id: 1, name: 'eat shit', complete: false },
        { id: 2, name: 'eat more shit', complete: false },
        { id: 3, name: 'die inside', complete: true }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <div>{this.state.test}</div>
        <NavBar/>
        <MainContent todos={this.state.todos}/>
        <Footer/>
      </div>
    );
  }



}

export default App;


// USEFUL LINKS 

// SUPPORTED EVENTS https://reactjs.org/docs/events.html#supported-events