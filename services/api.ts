import axios from "axios";
import { parseCookies } from "nookies";

export const getAPICLient = (ctx?: any) => {
    const { 'nextauth.token': token } = parseCookies(ctx);

    return axios.create({
        baseURL: 'http://localhost:4000/note',
        headers: {'Authorization': `Bearer ${token}`}
    })
} 

export const api = getAPICLient();