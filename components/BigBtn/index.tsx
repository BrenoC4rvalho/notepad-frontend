type Props = {
    text: string
}

const BigBtn = ( props: Props ) => {
    return (
        <button className="p-3 rounded mt-7 mb-4 text-2xl bg-cyan-500 text-white">
            {props.text}
        </button>
    )
}

export default BigBtn