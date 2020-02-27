import React from 'react';

const ToDoItem = (props) => 
<li key={props.id}>
    <label htmlFor={props.id}>{props.title}</label><br/>
    <input 
        checked={props.complete} 
        id={props.id} 
        type="checkbox"
        onChange={() => props.onChange(props.id)}
    />
</li>

export default ToDoItem