import { Link, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import BorderTransButton from "../../components/BorderTransButton";
import OrangeButton from "../../components/OrangeButton";
import TransButton from "../../components/TransButton";
import "../../styles/WelcomePage.css";

function WelcomePage() {
    const location = useLocation();

    return (
        <>
            <div className="welcome-page-container">
                <div className="welcome-background"></div>

                <div className="welcome-logo ani-left-enter">
                    <div>
                        <img src="../Logotipo.svg" alt="" />
                    </div>

                    <p>Música a medida.</p>

                </div>

                <div className="welcome-buttons-container ani-right-enter">
                    <div className="welcome-buttons">

                        <Link to="/register" className="trans-button-txt link-orange-button">
                            <OrangeButton txt="Registrarse Gratis" />
                        </Link>
                        <BorderTransButton img="../google-logo.svg" txt="Continuar con google" />
                        <BorderTransButton img="../apple-logo.svg" txt="Continuar con Apple" />
                    </div>
                    <div className="welcome-login">
                        <Link to="/login" className="trans-button-txt link-trans-button">
                            <TransButton txt="Iniciar Sesión" />
                        </Link>
                    </div>
                </div>

                <div className="bottom-gradient"></div>
            </div >

        </>
    );
}

export default WelcomePage;