import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  GET_TODOS_SUCCESS,
  ADD_TODO_FAIL,
  GET_TODOS_FAIL,
  ADD_TODO_SUCCESS
} from "./constants";

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TODOS:
      return state;
    case GET_TODOS_SUCCESS:
      return [...state, ...action.payload];
    case GET_TODOS_FAIL:
      return state;

    case ADD_TODO:
      return state;

    case ADD_TODO_SUCCESS:
      return [...state, ...action.payload];

    case ADD_TODO_FAIL:
      return state;

    case DELETE_TODO:
      const newState = state.filter(data => {
        return data != action.payload;
      });
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
