import React,{ Component } from 'react'

export default class TodoList extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            todos: this.props.todos,
        }
    }

    render() {
        let { todos, onclick } = this.props;
        return (
            <div>
                {
                    todos.map((todo, index) => {
                        let { isCompleted,id,text } = todo;
                        return (
                            <div key={ index } onClick={ () => {onclick(id)} } style={{textDecoration:isCompleted ? 'line-through' : 'none' }}>
                                { text }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}