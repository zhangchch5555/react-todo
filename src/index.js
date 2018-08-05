import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import App from './component/App'
import { addTodo } from './action/index'

store.dispatch(addTodo('world'))

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
)