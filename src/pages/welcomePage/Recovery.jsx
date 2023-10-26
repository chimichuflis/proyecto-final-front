import "../../styles/Register.css";
import PageTitle from "../../components/PageTitle";
import OrangeButton from "../../components/OrangeButton";
import Input from "../../components/Input";
import { useState } from "react";

function Recovery() {
    const [emailOk, setEmailOk] = useState(false)

    return (
        <>
            <div className="register-container gradient-top ">
                <div className="register-wrapper">
                    <PageTitle title="Recuperar Cuenta" />
                    <div className="register-input-container">
                        <div className="register-email-input">
                            <Input validation={setEmailOk} name="Nombre de Usuario o E-mail:" type="email" placeholder="example@email.com" />
                            <p>Deberás poder ingresar al e-mail de la cuenta
                                para poder recuperarla.</p>
                        </div>
                    </div>
                </div>

                <div className="register-button-container">
                    <OrangeButton isdisabled={!emailOk} txt="Continuar" />
                </div>
            </div>
        </>
    );
}

export default Recovery;