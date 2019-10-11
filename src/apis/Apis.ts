import Axios from "./Axios";
import { GetFilesResponse, PostFilesResponse, PostFilesQuery } from "./models/Files";

class Apis {
    public async getFiles() {
        try {
            return await Axios.get<GetFilesResponse>('/files')
        } catch (error) {
            throw error;
        }
    }

    public async postFiles(query: PostFilesQuery) {
        try {
            return await Axios.post<PostFilesResponse>('/files', {
                params: query,
            });
        } catch (error) {
            throw error;
        }
    }
}

export default new Apis();