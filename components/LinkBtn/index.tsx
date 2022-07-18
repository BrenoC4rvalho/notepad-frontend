import Link from "next/link"

type Props = {
    text: string
    background: boolean
    link: string
}

const LinkBtn = ( props: Props) => {
    return (
        <Link href={props.link}>
            <button 
                className={` p-2 mx-2 text-base rounded border-cyan-500 border-2 
                    ${props.background ? 'bg-cyan-500 text-white' : 'text-cyan-500'} 
                `}
            >
                {props.text}
            </button>
        </Link>
    )
}

export default LinkBtn