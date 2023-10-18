import "../../styles/WelcomePage.css";

function WelcomePage() {
    return (
        <>
            <div className="login-background">

            </div>
            <div>
                <img src="../Logotipo.svg" alt="" />
            </div>

            <h1>Música a medida.</h1>

            <div>
                <button>
                    Registrarse Gratis
                </button>
                <button>
                    <img src="../google-logo.svg" alt="" />
                    Continuar con google
                </button>
                <button>
                    <img src="../apple-logo.svg" alt="" />
                    Continuar con Apple
                </button>
            </div>
            <button>
                Iniciar Sesión
            </button>
        </>
    );
}

export default WelcomePage;