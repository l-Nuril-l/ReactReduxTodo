import {REMOVE, CREATE, EDIT, TOGGLE} from "../actions/todoActions"

function todoReducer(state,action)
{
  switch(action.type)
  {
      case REMOVE:
        state.todos.splice(state.todos.findIndex(x => x.id === action.id), 1)
      return state
      case EDIT:
        state.todos.splice(state.todos.findIndex(x => x.id === action.todo.id),1,action.todo)
      return {state}
      case TOGGLE:
        state.todos.find(x => x.id === action.id).completed = !state.todos.find(x => x.id === action.id).completed
      return {todos: state.todos}
      case CREATE:
        action.todo.id = Math.max.apply(Math, state.todos.map(function(o) { return o.id; })) + 1
        state.todos.push(action.todo)
      return state
    default:
      return state;
  }
}

export { todoReducer }