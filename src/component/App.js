import React, { Component } from 'react'
import AddTodoContainer from '../container/AddTodoContainer'
import TodoListContainer from '../container/TodoListContainer'
import FilterTodoContainer from '../container/FilterTodoContainer'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <AddTodoContainer />
                <TodoListContainer />
                <FilterTodoContainer />
            </div>
        )

    }
}

export default App