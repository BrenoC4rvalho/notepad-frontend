import Header from "../../components/Header";
import NoteList from "../../components/NoteList";

const home = () => {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <Header islogged={true} isPageAdd={false} />

            <main className="flex justify-center">
                <NoteList />
            </main>

            <footer className="text-center mb-4">
                <p> Created by Breno </p>
            </footer>
        </div>
    )
}

export default home;