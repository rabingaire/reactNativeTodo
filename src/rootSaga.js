import { all } from "redux-saga/effects";
import { watcherSaga } from "./Containers/Home/saga";

export default function* rootSaga() {
  yield all([watcherSaga()]);
}
