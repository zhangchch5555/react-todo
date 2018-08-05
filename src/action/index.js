export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        text
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

export const filterTodo = (filter) => {
    return {
        type: 'SET_FILTER',
        filter
    }
}
