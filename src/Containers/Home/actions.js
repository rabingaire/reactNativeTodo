import { GET_TODOS, ADD_TODO, DELETE_TODO } from "./constants";

export const getTodos = () => {
  return {
    type: GET_TODOS
  };
};

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const deleteTodo = todo => {
  return {
    type: DELETE_TODO,
    payload: todo
  };
};
