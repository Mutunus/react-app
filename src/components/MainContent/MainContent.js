import React from 'react';
import './MainContent.css'
import ToDoItem from './../ToDoItem/ToDoItem.js'

class MainContent extends React.Component {
    constructor(props) {
        super()
        this.props = props
        this.state = props
    }

    render() {
        const todoItems = this.props.todos.map(todo => <ToDoItem key={todo.id} name={todo.name} complete={todo.complete}/>)
        return (
            <div onClick={this.handleClick}>
                <ul>
                    {todoItems}
                </ul>
            </div>
        )
    }

    handleClick = () => {
        console.log('handleClick')
        this.props = []
        this.setState({ todos: [] })
        console.log(this.props)
    }

}

export default MainContent;