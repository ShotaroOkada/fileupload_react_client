import Axios from "../Axios";

type postFilesParam = {
    url: string,
    file: File
}

export type postFilesParams = postFilesParam[]
export type postFilesResponse = undefined;

export async function postFilesClient(params: postFilesParams) {
    console.log(`params:${params}`)
    try {
        return await Axios.post<postFilesResponse>('/files', params);
    } catch (e) {
        throw new Error(e);
    }
}