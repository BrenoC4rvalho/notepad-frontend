import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useContext } from "react";
import Header from "../../components/Header";
import NoteForm from "../../components/NoteForm";
import { AuthContext } from "../../contexts/AuthContext";
import { getAPICLient } from "../../services/api";
import noteApi from "../../services/noteApi";

const add = () => {
    const router = useRouter()
    const { user } = useContext(AuthContext)


    const addNote = async (title: string, note: string) => {
        const instance = getAPICLient(); 
        if(user) {
            await noteApi.create(instance, user.nickname, title, note, user.id)
            router.push('/home');
        }

    }

    return (
        <div className="flex flex-col justify-between min-h-screen">
            <Header islogged={true} isPageAdd={true} />

            <main className="mx-20">
                <h2 className="text-4xl mb-7 font-bold text-cyan-500">Add new note</h2>
                <NoteForm  onClick={addNote} />
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


export default add;