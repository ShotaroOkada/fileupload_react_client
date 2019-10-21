import Axios from "../Axios";
import { Files } from "./Model";

export type getFilesParams = undefined;
export type getFilesResponse = Files;

export async function getFilesClient() {
    try {
        return await Axios.get<getFilesResponse>('/files');
    } catch (e) {
        throw new Error(e);
    }
}