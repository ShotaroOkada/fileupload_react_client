import * as ActionCreators from './FilesActionCreator'
import { ActionType } from 'typesafe-actions'

type FilesAction = ActionType<typeof ActionCreators>;
export default FilesAction;