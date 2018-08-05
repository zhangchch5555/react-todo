import { connect } from 'react-redux'
import FilterTodo from '../component/FilterTodo'
import { filterTodo } from '../action/index'

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onclick: (filter) => {
            dispatch(filterTodo(filter))
        }
    }
}

const AddTodoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterTodo)

export default AddTodoContainer