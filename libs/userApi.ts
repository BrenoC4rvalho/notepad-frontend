import axios from "axios";


const TOKEN = `Bearer `

const instance = axios.create({
    baseURL: 'http://localhost:4000'
})

instance.defaults.headers.get['Authorization'] = TOKEN
instance.defaults.headers.delete['Authorization'] = TOKEN


const userApi = {
    
    signup: async (nickname: string, password: string) => {
        let response = await instance.post('/signup', {
            nickname, password
        });
        return response.data;
    },

    signin: async (nickname: string, password: string) => {
        let response = await instance.post('/signin', {
            nickname, password
        });
        return response.data;
    },

    getUnique: async (id: string) => {
        let response = await instance.get(`/${id}`);
        return response.data;
    },

    destroy: async (id: string) => {
        let response = await instance.delete(`/${id}`);
        return response.data;
    }

}

export default userApi;