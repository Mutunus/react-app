import React from 'react';

const ToDoItem = (props) => 
<li key={props.id}>
    <label htmlFor={props.id}>{props.name}</label><br/>
    <input 
        onChange={() => console.log('eat cock')} 
        checked={props.complete} 
        id={props.id} 
        type="checkbox"
    />
</li>

export default ToDoItem