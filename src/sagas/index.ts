import { all } from "redux-saga/effects";
import filesSagas from "./FilesSaga";

export default function* rootSaga() {
    yield all([...filesSagas])
}