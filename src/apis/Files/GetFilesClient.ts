import Axios from "../Axios";
import FileState from "../../states/FileState";

export type getFilesParams = undefined;
export type getFilesResponse = FileState;

export async function getFilesClient() {
    try {
        return await Axios.get<getFilesResponse>('/files');
    } catch (e) {
        throw new Error(e);
    }
}