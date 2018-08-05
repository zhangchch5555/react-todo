import React,{ Component } from 'react'

export default class FilterTodo extends Component {
    constructor(prop) {
        super(prop)
    }

    render() {
        let { onclick } = this.props;

        return (
            <div>
                <button onClick={ () => { onclick('filter_all') }}>all</button>
                <button onClick={ () => { onclick('filter_completed') }}>completed</button>
                <button onClick={ () => { onclick('filter_noCompleted') }}>no completed</button>
            </div>
        )
    }
}