import "../styles/Input.css"

function Input(props) {
    return (
        <>
            <div>
                <label>{props.name}
                    <input type={props.type} placeholder={props.placeholder} />
                </label>

            </div>
        </>
    );
}

export default Input;