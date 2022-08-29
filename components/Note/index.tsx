import NoteType from "../../types/Note"
import LinkBtn from "../LinkBtn"

type Props = {
    note: NoteType | undefined
    onClick: () => void
}

const Note = (props: Props) => {

    return (
        
        <div>
            <h2 className="text-4xl text-cyan-500">{props.note?.title}</h2>
            <p className="text-xl my-5">{props.note?.note}</p>
            <div>
                <LinkBtn text="edit" link={`/edit/${props.note?.id}`} background={true} />
                <button 
                    onClick={props.onClick}
                    className='p-2 mx-2 text-base rounded border-cyan-500 border-2 text-cyan-500'
                >
                    delete
                </button>
            </div>
        </div>
    )
}

export default Note