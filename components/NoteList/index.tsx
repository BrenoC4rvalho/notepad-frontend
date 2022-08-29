import NoteType from "../../types/Note"
import LinkBtn from "../LinkBtn"

type Props = {
    list: NoteType[]
}

const NoteList = ( props: Props) => {
    return (

        <div className="flex flex-col flex-wrap w-4/5 ">
            {props.list.map((note, index) => (
                <div key={index} className="flex justify-between p-5 m-2 border-2 border-cyan-500 rounded">
                    <p className="text-4xl">{note.title}</p>
                    <LinkBtn text="open" background={true} link={`/note/${note.id}`} />
                </div>

            ))}    

        </div>
    )
}

export default NoteList