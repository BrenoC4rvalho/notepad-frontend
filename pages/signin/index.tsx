
import Form from "../../components/Form";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";


const Signin = () => {
    const { signIn } = useContext(AuthContext)

    const login = async (nickname: string, password: string) => {
        await signIn(nickname, password)
    }

    return (
        <div className="flex min-h-screen max-h-screen w-full">
            <div className="min-h-screen w-3/5 bg-cyan-500">
            </div>
            <div className="flex items-center w-2/5 bg-white">
                <Form 
                    btnTxt="LOGIN" txt="DON`T HAVE AN ACCOUNT? " 
                    linkTxt="REGISTER HERE" link="/signup" 
                    onClick={login} 
                />
            </div>
        </div>

    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { ['nextauth.token']: token } = parseCookies(ctx);


    if(token) {
        return {
            redirect: {
                destination: '/home',
                permanent: false
            }
        }
    }

    
    return {
        props: {}
    }
}


export default Signin;