import "../styles/OrangeButton.css"

function OrangeButton(props) {
    return (
        <button
            onClick={props.postLogin}
            disabled={props.isdisabled}
            className="orange-button">
            <span>{props.txt}</span>
        </button>
    );
}

export default OrangeButton;