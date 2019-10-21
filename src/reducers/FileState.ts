import FileState from "../states/FileState";
import FilesAction from "../actions/Files/FilesAction";
import FilesActionType from "../actions/Files/FilesActionType";

const initialState: FileState = {}

export default (state: FileState = initialState, action: FilesAction): FileState => {
    switch(action.type) {
        case FilesActionType.GET_FILES_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}