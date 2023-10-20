import "../../styles/Login.css";
import PageTitle from "../../components/PageTitle";
import OrangeButton from "../../components/OrangeButton";
import TransButton from "../../components/TransButton";
import Input from "../../components/Input";

function Login() {
    return (
        <>
            <PageTitle title="Iniciar Sesión" />
            <div className="login-input-container">
                <div className="login-email-input">
                    <Input name="Emaillll" type="email" placeholder="example@email.com" />
                </div>
                <div className="login-pass-input">
                    <Input></Input>
                </div>
            </div>
            <div>
                <OrangeButton txt="Iniciar Sesión" />
                <TransButton txt="¿Olvidaste tu contraseña?" />
            </div>
        </>
    );
}

export default Login;