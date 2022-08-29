import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useContext } from "react";
import Header from "../../components/Header";
import NoteForm from "../../components/NoteForm";
import { AuthContext } from "../../contexts/AuthContext";
import { getAPICLient } from "../../services/api";
import noteApi from "../../services/noteApi";

const edit = () => {
    const router = useRouter()
    const { id } = router.query;
    const { user } = useContext(AuthContext)

    const editNote = async (title: string, note: string) => {
        const instance = getAPICLient(); 
        if(user) {
            await noteApi.update(instance, user.nickname, title, note, parseInt(id as string))
            router.push('/home');
        }
    }

    return (
        <div className="flex flex-col justify-between min-h-screen">
            <Header islogged={true} isPageAdd={true} />

            <main className="mx-20">
                <NoteForm onClick={editNote} />
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

export default edit