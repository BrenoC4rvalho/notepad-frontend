import { useState } from "react"

type Props = {
    onClick: (title: string, note: string) => void
}

const NoteForm = (props: Props) => {

    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');

    return (
        <div className="flex flex-col ">
            <label className="text-3xl" htmlFor="title">Title</label>
            <input type="text" id="title"
                className="p-3 my-3 rounded bg-gray-300 text-2xl"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label className="text-3xl"  htmlFor="note">Note</label>
            <input type="text" id="note"
                className="p-3 my-3 rounded bg-gray-300 text-2xl"
                value={note}
                onChange={(e) => setNote(e.target.value)}
            />
            <div>
                <button 
                    className="p-3 rounded mt-7 mb-4 text-2xl bg-cyan-500 text-white"
                    onClick={() => props.onClick(title, note)}
                >
                    Submit
                </button>
            </div>

        </div>
    )
}

export default NoteForm