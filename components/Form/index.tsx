import Link from "next/link"

type Props = {
    btnTxt: string
    txt: string
    linkTxt: string
    link: string
}

const Form = ( props: Props) => {
    return (
        <div className="flex flex-col justify-center items-center h-3/4 w-2/5 bg-orange-400">
            
            <header className="text-center">
                <h1 className="text-2xl">CONNECT TO NOTEPAD</h1>
                <p className="text-lg">WRITE YOUR IDEAS</p>
            </header>

            <main >
                <div className="text-lg flex flex-col">
                    <label htmlFor="nickname">NICKNAME</label>
                    <input type="text" id="nickname"/>

                    <label htmlFor="password">PASSWORD</label>
                    <input type="text" id="password"/>
                </div>
                
                
                <button className="text-xl">{props.btnTxt}</button>
                <p className="text-base">
                    {props.txt}
                    <Link href={props.link}>{props.linkTxt}</Link>
                </p>
            </main>

        </div>
    )
}

export default Form;
