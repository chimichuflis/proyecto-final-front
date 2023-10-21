import { Link } from "react-router-dom";
import BorderTransButton from "../../components/BorderTransButton";
import OrangeButton from "../../components/OrangeButton";
import TransButton from "../../components/TransButton";
import "../../styles/WelcomePage.css";

function WelcomePage() {
    return (
        <>
            <div className="welcome-page-container">
                <div className="welcome-background">

                </div>
                <div className="welcome-logo">
                    <div>
                        <img src="../Logotipo.svg" alt="" />
                    </div>

                    <p>Música a medida.</p>

                </div>
                <div className="welcome-buttons-container">
                    <div className="welcome-buttons">
                        <OrangeButton txt="Registrarse Gratis" />
                        <BorderTransButton img="../google-logo.svg" txt="Continuar con google" />
                        <BorderTransButton img="../apple-logo.svg" txt="Continuar con Apple" />
                    </div>
                    <Link to="/login" className="trans-button-txt"><TransButton txt="Iniciar Sesión" /></Link>
                </div>
                <div className="bottom-gradient"></div>
            </div >

        </>
    );
}

export default WelcomePage;