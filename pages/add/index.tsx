import Header from "../../components/Header";
import NoteForm from "../../components/NoteForm";

const add = () => {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <Header islogged={true} isPageAdd={true} />

            <main className="mx-20">
                <h2 className="text-4xl mb-7 font-bold text-cyan-500">Add new note</h2>
                <NoteForm />
            </main>

            <footer className="text-center mb-4">
                <p> Created by Breno </p>
            </footer>
        </div>
    )
}

export default add;