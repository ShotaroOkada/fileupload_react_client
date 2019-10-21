import { all } from "redux-saga/effects";
import { filesSagas } from "./Files";


export default function* rootSaga() {
    yield all([...filesSagas])
}