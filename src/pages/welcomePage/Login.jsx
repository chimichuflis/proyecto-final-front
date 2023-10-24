import "../../styles/Login.css";
import PageTitle from "../../components/PageTitle";
import OrangeButton from "../../components/OrangeButton";
import TransButton from "../../components/TransButton";
import Input from "../../components/Input";
import InputPassword from "../../components/InputPassword";
import { useState } from "react";

function Login() {
    const [passwordOk, setPasswordOk] = useState(false)
    const [emailOk, setEmailOk] = useState(false)

    return (
        <>
            <div className="login-container gradient-top">
                <PageTitle title="Iniciar Sesión" />
                <div className="login-input-container">
                    <div className="login-email-input">
                        <Input validation={setEmailOk} name="Nombre de Usuario o E-mail:" type="email" placeholder="example@email.com" />
                    </div>
                    <div className="login-pass-input">
                        <InputPassword validation={setPasswordOk} name="Contraseña:" type="password"></InputPassword>
                    </div>
                </div>
                <div className="login-button-container">
                    <OrangeButton isdisabled={!(emailOk && passwordOk)} txt="Iniciar Sesión" />
                    <TransButton txt="¿Olvidaste tu contraseña?" />
                </div>
            </div>
        </>
    );
}

export default Login;