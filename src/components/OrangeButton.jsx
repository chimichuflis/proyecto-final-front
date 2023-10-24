import "../styles/OrangeButton.css"

function OrangeButton(props) {
    return (
        <button disabled={props.isdisabled} className="orange-button">
            <span>{props.txt}</span>
        </button>
    );
}

export default OrangeButton;