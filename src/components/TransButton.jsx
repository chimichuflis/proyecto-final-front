import "../styles/TransButton.css"

function TransButton(props) {
    return (
        <>
            <button className="trans-button">
                <span>{props.txt}</span>
            </button>
        </>
    );
}

export default TransButton;