import {
  ADD_TODO,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR
} from './actions';

const initialState = {
  todos: [],
  loader: false,
  addTodoLoader: false,
  errorText: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        addTodoLoader: false,
        ...{todos: state.todos.concat([action.payload])}
      };

    case ADD_TODO:
      return {...state, ...{addTodoLoader: true}};

    case ADD_TODO_ERROR:
      return {...state, ...{errorText: action.payload, addTodoLoader: false}};

    case GET_TODOS:
      return {...state, ...{loader: true}};

    case GET_TODOS_SUCCESS:
      return {
        ...state,
        ...{todos: state.todos.concat(action.payload), loader: false}
      };

    case GET_TODOS_ERROR:
      return {...state, ...{errorText: action.payload, loader: false}};

    default:
      return state;
  }
};

export default reducer;
