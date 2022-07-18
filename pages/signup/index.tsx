import Form from "../../components/Form";
import userApi from "../../libs/userApi";

const Signup = () => {
    
    const register = async (nickname: string, password: string) => {
        const token = await userApi.signup(nickname, password);
        console.log(token)
      
        //fazer a parte de colocar o token em algum lugar 
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

export default Signup;