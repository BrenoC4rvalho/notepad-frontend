import { AxiosInstance } from "axios"


const noteApi = {
    
    getAll: async (instance: AxiosInstance, nickname: string) => {
        let response = await instance.get(`/${nickname}`);
        return response.data;
    },

    create: async (instance: AxiosInstance, nickname: string, title: string, note: string, user_id: number) => {
        let response = await instance.post(`/${nickname}`, {
            title, note, user_id
        });
        return response.data;
    },

    getUnique: async (instance: AxiosInstance, nickname: string, id: number) => {
        let response = await instance.get(`/${nickname}/${id}`);
        return response.data;
    },

    update: async (instance: AxiosInstance, nickname: string, title: string, note: string, id: number) => {
        let response = await instance.put(`/${nickname}/${id}`, {
            title, note
        });
        return response.data;
    },

    destroy: async (instance: AxiosInstance, nickname: string, id: number) => {
        let response = await instance.delete(`/${nickname}/${id}`);
        return response.data;
    }
}

export default noteApi
