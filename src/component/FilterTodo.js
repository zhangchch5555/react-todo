import React,{ Component } from 'react'
import { FILTER_ALL, FILTER_COMPLETED, FILTER_NOCOMPLETED } from '../action/index'

export default class FilterTodo extends Component {
    constructor(prop) {
        super(prop)
    }

    render() {
        let { onclick } = this.props;

        return (
            <div>
                <button onClick={ () => { onclick(FILTER_ALL) }}>all</button>
                <button onClick={ () => { onclick(FILTER_COMPLETED) }}>completed</button>
                <button onClick={ () => { onclick(FILTER_NOCOMPLETED) }}>no completed</button>
            </div>
        )
    }
}