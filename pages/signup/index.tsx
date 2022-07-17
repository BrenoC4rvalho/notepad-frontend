import Form from "../../components/Form";

const Signup = () => {
    return (
        <div className="min-h-screen w-full bg-red-600">
            <Form btnTxt="REGISTER" txt="DO HAVE AN ACCOUNT?" linkTxt="LOGIN HERE" link="/signin"/>
        </div>
    )
}

export default Signup;