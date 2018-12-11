import {
  ADD_TODO,
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR
} from './actions';

const initialState = {
  todos: [],
  loader: false,
  errorText: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {...state, ...{todos: state.todos.concat([action.payload])}};

    case GET_TODOS:
      return {...state, ...{loader: true}};

    case GET_TODOS_SUCCESS:
      return {
        ...state,
        ...{todos: state.todos.concat([action.payload]), loader: false}
      };

    case GET_TODOS_ERROR:
      return {...state, ...{errorText: action.payload, loader: false}};

    default:
      return state;
  }
};

export default reducer;
