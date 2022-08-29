import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:4000'
})



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

    recoverUserInformation: async (token: string) => {
        instance.defaults.headers.get['Authorization'] = `Bearer ${token}`
        let response = await instance.get('/getuser');
        return response.data;
    },

    getUnique: async (id: string, token: string) => {
        instance.defaults.headers.get['Authorization'] = `Bearer ${token}`
        let response = await instance.get(`/${id}`);
        return response.data;
    },

    destroy: async (id: string, token: string) => {
        instance.defaults.headers.delete['Authorization'] = `Bearer ${token}`
        let response = await instance.delete(`/${id}`);
        return response.data;
    }

}

export default userApi;