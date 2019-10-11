import { takeLatest, call, put } from 'redux-saga/effects';
import { getFiles } from "../actions/Files/FilesActionCreator";
import { PromiseGenericType } from "../utils/TypeUtils";
import Apis from "../apis/Apis";
import FilesActionType from '../actions/Files/FilesActionType';

function* getFilesSaga(action: ReturnType<typeof getFiles.request>) {
    const response: PromiseGenericType<ReturnType<typeof Apis.getFiles>> = yield call(
        Apis.getFiles
    );

    if(response.status === 200 && response.data) {
        yield put(getFiles.success(response.data));
    } else if (response.status === 400) {
        yield put(getFiles.failure());
    } else {
        yield put(getFiles.failure());
    }
}

const filesSagas = [
    takeLatest(FilesActionType.GET_FILES_REQUEST, getFilesSaga)
];
export default filesSagas;