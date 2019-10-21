import Axios from "../Axios";

export type postFilesParams = string[];
export type postFilesResponse = undefined;

export async function postFilesClient(params: postFilesParams) {
    console.log(`params:${params}`)
    try {
        return await Axios.post<postFilesResponse>('/files', params);
    } catch (e) {
        throw new Error(e);
    }
}