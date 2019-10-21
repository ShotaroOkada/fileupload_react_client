import { takeLatest } from "redux-saga/effects";
import FilesActionType from "../../actions/Files/FilesActionType";
import { getFilesSaga } from './GetFilesSaga'
import { postFilesSaga } from "./PostFilesSaga";

export const filesSagas = [
    takeLatest(FilesActionType.GET_FILES_REQUEST, getFilesSaga),
    takeLatest(FilesActionType.POST_FILES_REQUEST, postFilesSaga)
];