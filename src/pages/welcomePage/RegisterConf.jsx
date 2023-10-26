import "../../styles/Login.css";
import PageTitle from "../../components/PageTitle";
import OrangeButton from "../../components/OrangeButton";
import Input from "../../components/Input";
import InputPassword from "../../components/InputPassword";
import { useState } from "react";



function RegisterConf() {
    const [passwordOk, setPasswordOk] = useState(false)
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    return (
        <>
            <div className="login-container gradient-top">
                <PageTitle title="Crear Cuenta" />
                <div className="login-input-container">
                    <div className="login-email-input">
                        <Input setter={setUser} validation={() => { }} name="Nombre de Usuario:" type="text" placeholder="Nombre de usuario" />
                    </div>
                    <div className="login-pass-input">
                        <InputPassword setter={setPassword} validation={setPasswordOk} name="Contraseña:" type="password"></InputPassword>
                        <p>Deberás poder confirmarlo luego.</p>
                    </div>
                </div>
                <div className="login-button-container">
                    <OrangeButton isdisabled={!passwordOk} txt="Continuar" />
                </div>
            </div>
        </>
    );
}

export default RegisterConf;