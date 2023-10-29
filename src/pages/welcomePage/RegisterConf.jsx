import "../../styles/Login.css";
import PageTitle from "../../components/PageTitle";
import OrangeButton from "../../components/OrangeButton";
import Input from "../../components/Input";
import InputPassword from "../../components/InputPassword";
import { useState } from "react";
import { register } from "../../API/Rule_Register"
import { useNavigate } from "react-router-dom";



function RegisterConf() {
    const [passwordOk, setPasswordOk] = useState(false)
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const [tos, setTos] = useState(false);
    const navigate = useNavigate();
    const postRegister = async () => {
        try {
            const response = await register(localStorage.registerEmail, user, password)
            navigate("/login")
        }
        catch (err) { console.log(err) }
    }
    return (
        <>
            <div className="login-container gradient-top">
                <PageTitle title="Crear Cuenta" />
                <div className="register-span ani-right-enter">
                    <span>Ingresa un nombre de usuario y contraseña.</span>
                </div>
                <div className="register-conf-input-container ani-right-enter">
                    <div className="login-email-input">
                        <Input setter={setUser} validation={() => { }} name="Nombre de Usuario:" type="text" placeholder="Nombre de usuario" />
                    </div>
                    <div className="login-pass-input">
                        <InputPassword setter={setPassword} validation={setPasswordOk} name="Contraseña:" type="password"></InputPassword>
                        <p>{password.length > 1 && password.length < 8 ? "Deberá contener al menos 8 caracteres." : ""}</p>
                    </div>

                </div>
                <div className="register-checkbox ani-right-enter">
                    <div className="register-checkbox-input-outside">
                        <input onChange={(e) => { setTos(e.target.checked) }} className="register-checkbox-input-inside" type="checkbox" name="" id="" />
                    </div>
                    <span className="checkbox-span">He leído y acepto los <a className="a-span" href="">Términos</a> y <a className="a-span" href="">Condiciones.</a></span>
                </div>
                <div className="register-conf-button-container ani-right-enter">
                    <OrangeButton postLogin={postRegister} isdisabled={!(passwordOk && user.length > 3 && tos)} txt="Continuar" />
                </div>
            </div>
        </>
    );
}

export default RegisterConf;