import { call, put } from 'redux-saga/effects';
import { getFiles } from "../../actions/Files/FilesActionCreator";
import { PromiseGenericType } from "../../utils/TypeUtils";
import { getFilesClient } from '../../apis/Files/GetFilesClient';

export function* getFilesSaga(action: ReturnType<typeof getFiles.request>) {
    const response: PromiseGenericType<ReturnType<typeof getFilesClient>> = yield call(
        getFilesClient,
        action.payload
    );

    if(response.status === 200 && response.data) {
        yield put(getFiles.success(response.data));
    } else if (response.status === 400) {
        yield put(getFiles.failure());
    } else {
        yield put(getFiles.failure());
    }
}