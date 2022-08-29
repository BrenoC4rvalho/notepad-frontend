import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { getAPICLient } from "../../services/api";
import noteApi from "../../services/noteApi";

import NoteType from "../../types/Note";

import Header from "../../components/Header";
import NoteList from "../../components/NoteList";



const home = () => {
    const [noteList, setNoteList] = useState<NoteType[]>([]) 
    const { user } = useContext(AuthContext)

    useEffect(() => {
        loadNoteList()
    }, [])

    const loadNoteList = async () => {
        const instance = getAPICLient(); 
        if(user) {
            const response: NoteType[] = await noteApi.getAll(instance, user.nickname)
            setNoteList(response);
        }
    }

    return (
        <div className="flex flex-col justify-between min-h-screen">
            <Header islogged={true} isPageAdd={false} />
            <main className="flex justify-center">
                <NoteList list={noteList} />
            </main>

            <footer className="text-center mb-4">
                <p> Created by Breno </p>
            </footer>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { ['nextauth.token']: token } = parseCookies(ctx);


    if(!token) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    
    return {
        props: {}
    }
}

export default home;