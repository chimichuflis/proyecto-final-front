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
                        <button className="orange-button">
                            Registrarse Gratis
                        </button>
                        <button className="border-trans-button">
                            <img src="../google-logo.svg" alt="" />
                            Continuar con google
                        </button>
                        <button className="border-trans-button">
                            <img src="../apple-logo.svg" alt="" />
                            Continuar con Apple
                        </button>
                    </div>
                    <button className="trans-button">
                        Iniciar Sesión
                    </button>
                </div>
                <div className="bottom-gradient"></div>
            </div>

        </>
    );
}

export default WelcomePage;