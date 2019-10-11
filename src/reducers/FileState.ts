import FileState from "../states/FileState";
import FilesAction from "../actions/Files/FilesAction";
import FilesActionType from "../actions/Files/FilesActionType";

const initialState: FileState = {
    files: []
}

export default (state: FileState = initialState, action: FilesAction): FileState => {
    switch(action.type) {
        case FilesActionType.GET_FILES_SUCCESS:
            return {
                ...state,
                files: [...action.payload.files]
            }
        default:
            return state
    }
}