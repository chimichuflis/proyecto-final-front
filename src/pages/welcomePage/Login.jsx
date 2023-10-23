import "../../styles/Login.css";
import PageTitle from "../../components/PageTitle";
import OrangeButton from "../../components/OrangeButton";
import TransButton from "../../components/TransButton";
import Input from "../../components/Input";

function Login() {
    return (
        <>
            <div className="login-container gradient-top">
                <PageTitle title="Iniciar Sesión" />
                <div className="login-input-container">
                    <div className="login-email-input">
                        <Input name="Nombre de Usuario o E-mail:" type="email" placeholder="example@email.com" />
                    </div>
                    <div className="login-pass-input">
                        <Input name="Contraseña:" type="password"></Input>
                    </div>
                </div>
                <div className="login-button-container">
                    <OrangeButton txt="Iniciar Sesión" />
                    <TransButton txt="¿Olvidaste tu contraseña?" />
                </div>
            </div>
        </>
    );
}

export default Login;