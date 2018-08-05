// 控制显示的filter 定数
export const FILTER_ALL = Symbol('filter_all')
export const FILTER_COMPLETED = Symbol('filter_completed')
export const FILTER_NOCOMPLETED = Symbol('filter_noCompleted')

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
