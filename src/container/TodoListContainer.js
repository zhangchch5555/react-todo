import { connect } from 'react-redux'
import TodoList from '../component/TodoList'
import { toggleTodo } from '../action/index'

const getFilterData = (addTodo, filterFlag) => {
    if(filterFlag == 'filter_completed') {
        return addTodo.filter((item) => {
            return item.isCompleted
        })
    } else if(filterFlag == 'filter_noCompleted') {
        return addTodo.filter((item) => {
            return !item.isCompleted
        })
    } else {
        return addTodo
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getFilterData(state.addTodo, state.filterFlag)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onclick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default TodoListContainer