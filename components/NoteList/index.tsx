import LinkBtn from "../LinkBtn"

const NoteList = () => {
    return (
        <div className="flex flex-col flex-wrap w-4/5 ">
            
            <div className="flex justify-between p-5 m-2 border-2 border-cyan-500 rounded">
                <p className="text-4xl">Tífkfkf fkfkfnfkf f fkffkfnfkfnf fkf fkffkmmfkf fkf fmfkmf mfkfmfmfk kmfmkfmfk</p>
                <LinkBtn text="open" background={true} link="/:id" />
            </div>

        </div>
    )
}

export default NoteList