import axios from "axios"

const TOKEN = `Bearer `

const instance = axios.create({
    baseURL: 'http://localhost:4000/note',
    headers: {'Authorization': TOKEN}
})

const noteApi = {

    getAll: async (nickname: string) => {
        let response = await instance.get(`/${nickname}`);
        return response.data;
    },

    create: async (nickname: string, title: string, note: string, user_id: number) => {
        let response = await instance.post(`/${nickname}`, {
            title, note, user_id
        });
        return response.data;
    },

    getUnique: async (nickname: string, id: number) => {
        let response = await instance.get(`/${nickname}/${id}`);
        return response.data;
    },

    update: async (nickname: string, title: string, note: string, id: number) => {
        let response = await instance.put(`/${nickname}/${id}`, {
            title, note
        });
        return response.data;
    },

    destroy: async (nickname: string, id: number) => {
        let response = await instance.delete(`/${nickname}/${id}`);
        return response.data;
    }
}

export default noteApi