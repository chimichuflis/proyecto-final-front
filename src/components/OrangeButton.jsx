import "../styles/OrangeButton.css"

function OrangeButton(props) {
    return (
        <>
            <button className="orange-button">
                <span>{props.txt}</span>
            </button>
        </>
    );
}

export default OrangeButton;