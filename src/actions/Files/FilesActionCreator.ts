import { createAsyncAction } from 'typesafe-actions'
import { GetFilesQuery, GetFilesResponse, PostFilesQuery, PostFilesResponse } from '../../apis/models/Files'
import FilesActionType from './FilesActionType'

export const getFiles = createAsyncAction(
    FilesActionType.GET_FILES_REQUEST,
    FilesActionType.GET_FILES_SUCCESS,
    FilesActionType.GET_FILES_FAILED
)<GetFilesQuery, GetFilesResponse, undefined>();

export const postFiles = createAsyncAction(
    FilesActionType.POST_FILES_REQUEST,
    FilesActionType.POST_FILES_SUCCESS,
    FilesActionType.POST_FILES_FAILED
)<PostFilesQuery, PostFilesResponse, undefined>();