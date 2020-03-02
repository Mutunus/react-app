import React, { useReducer } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import Footer from './components/Footer/Footer.js'
import MainContent from './components/MainContent/MainContent';

export const ThemeContext = React.createContext({ color: 'red' })

const themeReducer = (state, action) => {
  switch (action.type) {
      case 'dark':
      return {color: 'red'};
      case 'light':
      default:
      return {color: 'white'}
  }
}

const App = () => {
  const [theme, dispatch] = useReducer(themeReducer, {color: 'white'});

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <NavBar/>
        <MainContent/>
        <Footer/>
      </ThemeContext.Provider>
      <button onClick={() => dispatch({type: 'light'})}>Light Theme</button>
      <button onClick={() => dispatch({ type: 'dark'})}>Dark Theme</button>
    </div>
  );
}

export default App;


// USEFUL LINKS 

// SUPPORTED EVENTS https://reactjs.org/docs/events.html#supported-events
// FORMS https://reactjs.org/docs/forms.html