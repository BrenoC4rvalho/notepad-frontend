import Header from "../../components/Header"
import Note from "../../components/Note"

const note = () => {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <Header islogged={true} isPageAdd={true} />

            <main className="mx-20">
                <Note />
            </main>

            <footer className="text-center mb-4">
                <p> Created by Breno </p>
            </footer>
        </div>
    )
}

export default note