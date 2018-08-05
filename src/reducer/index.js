import { combineReducers } from 'redux'
import { FILTER_ALL } from '../action/index'

const initIndex = 0;
const initStateData = [
    {
        id: initIndex,
        isCompleted: false,
        text: 'hello'
    },
]

const addTodo = (state = initStateData, action) => {
    switch (action.type ) {
        case 'ADD_TODO':
            if(!action.text) {
                return state
            }
            return [...state, {
                id: state.length,
                isCompleted: false,
                text: action.text
            }]
            //state.push({
            //    id: state.length,
            //    text: action.text
            //})
            //let newState = [...state];  //redux禁止直接修改原来的对象，一旦你要修改某些东西，就得把修改路径上的所有对象复制一遍
            //return newState //redux 必须返回一个新的地址（与之前的state的地址不同）
        case 'TOGGLE_TODO':
            state.map((item) => {
                if(item.id === action.id) {
                    item.isCompleted = !item.isCompleted
                }
                return item;
            })
            let newState = [...state];
            return newState
        default:
            return state
    }
}

// 为什么不能单独将TOGGLE_TODO写成一个纯函数
// 如何单独写成一个纯函数了，通过这个纯函数得到结果不能反馈到addTodo中，
// 在container组件中，传递值到时候，会大大增加了处理的难度
//const toggleTodo = (state = initStateData, action) => {
//    switch (action.type) {
//        case 'TOGGLE_TODO':
//            state.map((item) => {
//                return toggleItem(item, action);
//            })
//            let newState = [...state];
//            console.log(newState);
//            return newState
//        default:
//            return state
//    }
//}

const filterFlag = (state = FILTER_ALL,action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.filter
        default:
            return state
    }
}

const reducer = combineReducers({
    addTodo,
    filterFlag,
})

export default reducer