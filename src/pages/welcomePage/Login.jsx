import "../../styles/Login.css";
import PageTitle from "../../components/PageTitle";
import OrangeButton from "../../components/OrangeButton";
import TransButton from "../../components/TransButton";
import Input from "../../components/Input";
import InputPassword from "../../components/InputPassword";
import { useState } from "react";
import { login } from "../../API/Rule_Login";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [passwordOk, setPasswordOk] = useState(false);
    const [emailOk, setEmailOk] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [incorrectPassword, setIncorrectPassword] = useState(false);
    const [responseMsg, setResponseMsg] = useState("")

    const navigate = useNavigate();
    const postLogin = async () => {
        try {
            const response = await login(email, password)
            if (response.pass) {
                localStorage.setItem("token", response.token)
                navigate("/home");
                return
            }
            setResponseMsg(response.msg)
            setIncorrectPassword(true);
        }
        catch (err) {
            console.log(err)
            setIncorrectPassword(true);
        }
    };

    return (
        <>
            <div className="login-container gradient-top">
                <PageTitle title="Iniciar Sesión" />
                <div className="login-input-container">
                    <div className="login-email-input ani-right-enter">
                        <Input setter={setEmail} validation={setEmailOk} name="Nombre de Usuario o E-mail:" type="text" placeholder="example@email.com" />
                    </div>
                    <div className="login-pass-input ani-left-enter">
                        <InputPassword setter={setPassword} validation={setPasswordOk} name="Contraseña:" type="password" />
                        {incorrectPassword && (
                            <p className={`incorrect-password-message ${incorrectPassword ? "message-animation" : ""}`}>{responseMsg}</p>
                        )}
                    </div>
                </div>
                <div className="login-button-container">
                    <div className="button-general ani-right-enter">
                        <OrangeButton postLogin={postLogin} isdisabled={!(emailOk && passwordOk)} txt="Iniciar Sesión" />
                    </div>
                    <div className="button-general ani-left-enter">
                        <Link className="trans-button-txt link-trans-button" to="/recovery"><TransButton txt="¿Olvidaste tu contraseña?" /></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;