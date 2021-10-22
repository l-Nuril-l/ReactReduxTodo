import { createStore } from 'redux';
import { todoReducer } from '../recuders/todoReducer'
import { todosData } from '../todosData';

const store = createStore(todoReducer,{todos: todosData})

export { store }