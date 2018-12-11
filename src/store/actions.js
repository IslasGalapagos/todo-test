import axios from 'axios';

export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_ERROR = 'ADD_TODO_ERROR';
export const GET_TODOS = 'GET_TODOS';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODOS_ERROR = 'GET_TODOS_ERROR';

export const addTodo = todoText => dispatch => {
  dispatch({
    type: ADD_TODO
  });

  return axios
    .put(`${API_URL}/todos`, {todoText: todoText})
    .then(response => {
      dispatch({
        type: ADD_TODO_SUCCESS,
        payload: todoText
      });
    })
    .catch(error => {
      dispatch({
        type: ADD_TODO_ERROR,
        payload: error
      });
    });
};

export const getTodos = () => dispatch => {
  dispatch({
    type: GET_TODOS
  });

  return axios
    .get(`${API_URL}/todos`)
    .then(reponse => {
      dispatch({
        type: GET_TODOS_SUCCESS,
        payload: reponse.data
      });
    })
    .catch(error => {
      dispatch({
        type: GET_TODOS_ERROR,
        payload: error
      });
    });
};
