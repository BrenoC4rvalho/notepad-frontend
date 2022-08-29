import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { parseCookies, setCookie } from 'nookies'
import Router from "next/router";

import userApi from "../services/userApi";


type User = {
    nickname: string
    id: number 
}

type AuthContextType = {
    user: User | null
    isAuthenticated: boolean
    signIn: (nickname: string, password: string) => Promise<void>
}


export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: PropsWithChildren) {
    const [user, setUser] = useState<User | null>(null)

    const isAuthenticated = !!user;

    useEffect(() => {
        const { 'nextauth.token': token } = parseCookies()

        if(token) {
            userApi.recoverUserInformation(token).then(response => {
                setUser(response)  
            })
        }

    }, [])

    async function signIn(nickname: string, password: string) {
        const { token, user } = await userApi.signin(nickname, password);
        
        setCookie(undefined, 'nextauth.token', token, {
            maxAge: 60 * 60 * 1 // 1 hour
        })

        setUser(user)

        Router.push('/home')
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}
