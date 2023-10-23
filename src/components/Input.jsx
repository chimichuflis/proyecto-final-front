import "../styles/Input.css"

function Input(props) {
    return (
        <>
            <div className="input-container">
                <label className="input-label">{props.name}
                    <div className="input-size"><input type={props.type} placeholder={props.placeholder} /></div>
                </label>

            </div>
        </>
    );
}

export default Input;