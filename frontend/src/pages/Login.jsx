import AuthForm from "../components/AuthForm"


function Login() {

    return <AuthForm route="api/token/" method="login"></AuthForm>
}

export default Login