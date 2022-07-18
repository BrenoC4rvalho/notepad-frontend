import Link from "next/link"

type Props = {
    text: string
}

const Btn = ( props: Props) => {
    return (
        
            <button className='p-2 mx-2 text-base rounded border-cyan-500 border-2 text-cyan-500'>
                {props.text}
            </button>
    )
}

export default Btn