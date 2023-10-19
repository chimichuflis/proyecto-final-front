import "../../styles/BorderTransButton.css"

function BorderTransButton(props) {
    return (
        <>
            <button className="border-trans-button">
                <img src={props.img} alt="" />
                <span>{props.txt}</span>
            </button>
        </>
    );
}

export default BorderTransButton;