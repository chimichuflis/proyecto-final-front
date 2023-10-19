import BorderTransButton from "../../components/reusable/BorderTransButton";
import OrangeButton from "../../components/reusable/OrangeButton";
import TransButton from "../../components/reusable/TransButton";
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
                    <TransButton txt="Iniciar Sesión" />
                </div>
                <div className="bottom-gradient"></div>
            </div >

        </>
    );
}

export default WelcomePage;