import React, { useState, useEffect, useReducer, useContext } from 'react';
import { ThemeContext } from './../../App.js'

const footerReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
        return {count: state.count + 1};
        case 'decrement':
        return {count: state.count - 1};
        default:
        throw new Error();
    }
}

const Footer = () => {
    // get theme from context
    const theme = useContext(ThemeContext);
    // current state and update function
    const [title, setTitle] = useState('HEY BRO');

    // only execute this function once dom is updated
    useEffect(() => {
        document.title = title;
        // return function is executed when the component unmounts
        return () => document.title = 'YEP'
      });

      // reducer function + initial state. allows more flexibility than useState
      const [state, dispatch] = useReducer(footerReducer, { count: 0 });

    return (
        <div>
            <div style={ theme }>{title}</div>
            Count: {state.count}
                <button onClick={() => dispatch({type: 'decrement'})}>-</button>
                <button onClick={() => dispatch({type: 'increment'})}>+</button>
                <button onClick={() => setTitle('YO YO YO')}>CHANGE TITLE</button>
        </div>
    )
}

export default Footer;