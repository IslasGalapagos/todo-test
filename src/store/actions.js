import axios from 'axios';

export const ADD_TODO = 'ADD_TODO';
export const GET_TODOS = 'GET_TODOS';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODOS_ERROR = 'GET_TODOS_ERROR';

export const addTodo = todoText => ({
  type: ADD_TODO,
  payload: todoText
});

export const getTodos = () => dispatch => {
  dispatch({
    type: GET_TODOS
  });

  return axios('/api/getTodos')
    .then(reponse => {
      dispatch({
        type: GET_TODOS,
        payload: reponse
      });
    })
    .catch(error => {
      dispatch({
        type: GET_TODOS_ERROR,
        payload: error
      });
    });
};
