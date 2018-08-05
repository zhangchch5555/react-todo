import { connect } from 'react-redux'
import AddTodo from '../component/AddTodo'
import { addTodo } from '../action/index'

const mapStateToProps = (state) => {
    return {
        todos: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onclick: (text) => {
            dispatch(addTodo(text))
        }
    }
}

const AddTodoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo)

export default AddTodoContainer