import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { useContext } from "react";
import Form from "../../components/Form";
import { AuthContext } from "../../contexts/AuthContext";
import userApi from "../../services/userApi";

const Signup = () => {
    const { signIn } = useContext(AuthContext)

    const register = async (nickname: string, password: string) => {
        await userApi.signup(nickname, password);
        await signIn(nickname, password)
    }

    return (
        <div className="flex min-h-screen max-h-screen w-full">
                <div className="flex items-center w-2/5 bg-white">
                    <Form 
                        btnTxt="REGISTER" txt="DO HAVE AN ACCOUNT? " 
                        linkTxt="LOGIN HERE      " link="/signin"
                        onClick={register}    
                    />
                </div>
                <div className="min-h-screen w-3/5 bg-cyan-500">
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


export default Signup;