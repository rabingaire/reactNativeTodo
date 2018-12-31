import { combineReducers } from "redux";
import todosReducer from "./Containers/Home/reducer";

const reducers = combineReducers({
  todos: todosReducer
});

export default reducers;
