import { call, put } from 'redux-saga/effects';
import { postFiles, getFiles } from "../../actions/Files/FilesActionCreator";
import { PromiseGenericType } from "../../utils/TypeUtils";
import { postFilesClient } from '../../apis/Files/PostFilesClient';

export function* postFilesSaga(action: ReturnType<typeof postFiles.request>) {
    const response: PromiseGenericType<ReturnType<typeof postFilesClient>> = yield call(
        postFilesClient,
        action.payload
    );
    console.log(`status:${response.status}`)
    if(response.status === 200) {
        yield put(postFiles.success());
        yield put(getFiles.request());
    } else if (response.status === 400) {
        yield put(postFiles.failure());
    } else {
        yield put(postFiles.failure());
    }
}