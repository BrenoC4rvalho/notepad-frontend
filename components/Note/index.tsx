import Btn from "../Btn"
import LinkBtn from "../LinkBtn"

const Note = () => {
    return (
        <div>
            <h2 className="text-4xl text-cyan-500">Title da sua anotação</h2>
            <p className="text-xl my-5">corpo da sua anotaçao sinnd dndudnd dndnudnndu nddnndd ndudn ndndu nduund dnudndun</p>
            <div>
                <LinkBtn text="edit" link="/edit/:id" background={true} />
                <Btn text="delete"/>
            </div>
        </div>
    )
}

export default Note