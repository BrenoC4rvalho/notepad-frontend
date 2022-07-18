import userApi from "../../libs/userApi";

import Form from "../../components/Form";


const Signin = () => {
    
    const login = async (nickname: string, password: string) => {
        const token = await userApi.signin(nickname, password);
        console.log(token)
        //fazer com que coloque o token no sessions ou context api 
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

export default Signin;