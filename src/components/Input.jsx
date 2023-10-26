import "../styles/Input.css"

function Input(props) {
    const validation = (e) => {
        props.validation(e.target.validity.valid && !!e.target.value)
        props.setter(e.target.value)
    }

    return (
        <>
            <div className="input-container">
                <label className="input-label">{props.name}
                    <div className="input-outside">
                        <input onChange={validation} className="input-inside" type={props.type} placeholder={props.placeholder} />
                    </div>
                </label>

            </div>
        </>
    );
}

export default Input;