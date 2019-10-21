import { createAsyncAction } from 'typesafe-actions'
import FilesActionType from './FilesActionType'
import { getFilesResponse, getFilesParams } from '../../apis/Files/GetFilesClient';
import { postFilesParams, postFilesResponse } from '../../apis/Files/PostFilesClient';

export const getFiles = createAsyncAction(
    FilesActionType.GET_FILES_REQUEST,
    FilesActionType.GET_FILES_SUCCESS,
    FilesActionType.GET_FILES_FAILED
)<getFilesParams, getFilesResponse, undefined>();

export const postFiles = createAsyncAction(
    FilesActionType.POST_FILES_REQUEST,
    FilesActionType.POST_FILES_SUCCESS,
    FilesActionType.POST_FILES_FAILED
)<postFilesParams, postFilesResponse, undefined>();