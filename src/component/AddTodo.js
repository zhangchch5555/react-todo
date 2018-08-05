import React,{ Component } from 'react'

export default class AddTodo extends Component {
    constructor(prop) {
        super(prop)
    }

    render() {
        let { onclick } = this.props;

        return (
            <div>
                <input ref="addTodoInput"></input>
                <button onClick={ () => { onclick(this.refs.addTodoInput.value);this.refs.addTodoInput.value='';  } }>add todo</button>
            </div>
        )
    }
}