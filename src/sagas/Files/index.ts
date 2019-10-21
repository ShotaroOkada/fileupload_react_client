import { takeLatest } from "redux-saga/effects";
import FilesActionType from "../../actions/Files/FilesActionType";
import { getFilesSaga } from './GetFilesSaga'

export const filesSagas = [
    takeLatest(FilesActionType.GET_FILES_REQUEST, getFilesSaga)
];