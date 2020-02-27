import React from 'react';
import './MainContent.css'
import ToDoItem from './../ToDoItem/ToDoItem.js'
import UserForm from './../UserForm/UserForm.js'

class MainContent extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: []
          }
    }

    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos?userId=1').catch(e => console.error('failed to get todos', e))
        this.setState({ todos: await res.json() })
      }

    render() {
        const todoItems = this.state.todos.map(todo => <ToDoItem onChange={this.handleClick} key={todo.id} id={todo.id} title={todo.title} complete={todo.completed}/>)
        return (
            <div>
                <UserForm/>
                <div onClick={this.handleClick}>
                    <ul>
                        {todoItems}
                    </ul>
                </div>
            </div>
        )
    }

    handleClick = (todoId) => {
        const updatedTodos = this.state.todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo)
        this.setState({
            todos: updatedTodos
        })
    }

}

export default MainContent;