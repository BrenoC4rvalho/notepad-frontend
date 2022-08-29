import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { parseCookies } from "nookies"
import { useContext, useEffect, useState } from "react"
import Header from "../../components/Header"
import Note from "../../components/Note"
import { AuthContext } from "../../contexts/AuthContext"
import { getAPICLient } from "../../services/api"
import noteApi from "../../services/noteApi"
import NoteType from "../../types/Note"

const note = () => {
    const router = useRouter();

    const [note, setNote] = useState<NoteType>()
    const { user } = useContext(AuthContext)
    const { id } = router.query

    useEffect(() => {
        loadNote()
    }, [])

    const loadNote = async () => {
        const instance = getAPICLient(); 
        if(user) {
            const response: NoteType = await noteApi.getUnique(instance, user.nickname, parseInt(id as string))
            setNote(response);
        }
    }

    const deleteNote = async () => {
        const instance = getAPICLient();
        if(user) {
            await noteApi.destroy(instance, user.nickname, parseInt(id as string));
            router.push('/home');
        }
    }

    return (
        <div className="flex flex-col justify-between min-h-screen">
            <Header islogged={true} isPageAdd={true} />

            <main className="mx-20">
                <Note note={note} onClick={deleteNote} />
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


export default note