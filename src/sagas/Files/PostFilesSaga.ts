import { call, put } from 'redux-saga/effects';
import { postFiles } from "../../actions/Files/FilesActionCreator";
import { PromiseGenericType } from "../../utils/TypeUtils";
import { postFilesClient } from '../../apis/Files/PostFilesClient';

export function* postFilesSaga(action: ReturnType<typeof postFiles.request>) {
    const response: PromiseGenericType<ReturnType<typeof postFilesClient>> = yield call(
        postFilesClient,
        action.payload
    );

    if(response.status === 200 && response.data) {
        yield put(postFiles.success());
    } else if (response.status === 400) {
        yield put(postFiles.failure());
    } else {
        yield put(postFiles.failure());
    }
}