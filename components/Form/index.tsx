import Link from "next/link"
import { useState } from "react"

import { BsFillEyeFill, BsEyeSlashFill } from 'react-icons/bs';

type Props = {
    btnTxt: string
    txt: string
    linkTxt: string
    link: string

    onClick: (nickname: string, password: string) => void
}

const Form = ( props: Props) => {
    
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="flex flex-col items-center justify-evenly h-4/6 w-full">
            
            <header className="text-center">
                <h1 className="text-3xl">CONNECT TO NOTEPAD</h1>
                <p className="text-xl mt-2">WRITE YOUR IDEAS</p>
            </header>

            <main >
                <div className="text-xl flex flex-col">
                    <label className="my-1" htmlFor="nickname">NICKNAME</label>
                    <input type="text" id="nickname"
                        className="p-2 rounded bg-gray-100"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                    />

                    <label className="my-1" htmlFor="password">PASSWORD</label>
                    {visiblePassword &&
                        <div className="flex justify-between px-2 bg-gray-100 rounded">
                            <input type="text" id="password"
                                className="p-2 rounded bg-gray-100"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button onClick={() => setVisiblePassword(false)}> <BsEyeSlashFill /> </button>
                        </div>
                    }
                    {!visiblePassword && 
                        <div className="flex justify-between px-2 bg-gray-100 rounded">
                            <input type="password" id="password"
                                className="p-2 rounded bg-gray-100"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button onClick={() => setVisiblePassword(true)}> <BsFillEyeFill /> </button>
                        </div>
                    }
                    
                </div>
                
                
                <button onClick={() => props.onClick(nickname, password)} className="p-3 rounded mt-7 mb-4 text-2xl bg-cyan-500 text-white">
                    {props.btnTxt}
                </button>
                
                <p className="text-base">
                    {props.txt}
                    <span className="text-cyan-500 font-bold">
                        <Link href={props.link}>{props.linkTxt}</Link>
                    </span>
                </p>

            </main>

        </div>
    )
}

export default Form;
