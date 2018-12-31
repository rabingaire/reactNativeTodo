import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { GET_TODOS_SUCCESS, GET_TODOS_FAIL, GET_TODOS } from "./constants";

function fetchTodos() {
  return axios({
    method: "get",
    url: "http://10.10.3.253:5000/todos"
  });
}

function* workerSaga() {
  try {
    const response = yield call(fetchTodos);
    const todos = response.data.data;

    yield put({ type: GET_TODOS_SUCCESS, payload: todos });
  } catch (error) {
    yield put({ type: GET_TODOS_FAIL, error });
  }
}

export function* watcherSaga() {
  yield takeLatest(GET_TODOS, workerSaga);
}
