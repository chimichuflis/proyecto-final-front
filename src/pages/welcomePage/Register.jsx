import "../../styles/Register.css";
import PageTitle from "../../components/PageTitle";
import OrangeButton from "../../components/OrangeButton";
import Input from "../../components/Input";
import { useEffect, useState } from "react";
import { available } from "../../API/Rule_Login";
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const [emailOk, setEmailOk] = useState(false)
    const [email, setEmail] = useState("");
    const [emailMsg, setEmailMsg] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        async function availableEmail() {
            try {
                const response = await available(email)
            }
            catch (err) { console.log(err) }
        }
        if (emailOk) { availableEmail() }
    }, [email])
    const registerEmail = () => {
        localStorage.setItem("registerEmail", email)
        navigate("/RegisterConfirm")
    }
    return (
        <>
            <div className="register-container gradient-top ">
                <div className="register-wrapper">
                    <PageTitle title="Crear Cuenta" />
                    <div className="register-span">
                        <span>¿Cuál es tu correo electrónico?</span>
                    </div>
                    <div className="register-input-container">
                        <div className="register-email-input">
                            <Input setter={setEmail} validation={setEmailOk} name="Correo electrónico:" type="email" placeholder="example@email.com" />
                            <p>Deberás poder confirmarlo luego.</p>
                        </div>
                    </div>
                </div>

                <div className="register-button-container">
                    <OrangeButton postLogin={registerEmail} isdisabled={!emailOk} txt="Continuar" />
                </div>
            </div>
        </>
    );
}

export default Register;