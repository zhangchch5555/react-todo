import { connect } from 'react-redux'
import TodoList from '../component/TodoList'
import { toggleTodo } from '../action/index'
import { FILTER_COMPLETED, FILTER_NOCOMPLETED } from '../action/index'

const getFilterData = (addTodo, filterFlag) => {
    switch (filterFlag) {
        case FILTER_COMPLETED:
            return addTodo.filter((item) => {
                return item.isCompleted
            })
        case FILTER_NOCOMPLETED:
            return addTodo.filter((item) => {
                return !item.isCompleted
            })
        default:
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