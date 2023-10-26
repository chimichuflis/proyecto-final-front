import "../styles/Input.css"
import { useState } from "react";




function InputPassword(props) {
    const validation = (e) => {
        props.validation(e.target.value.length > 7)
        props.setter(e.target.value)
    }
    const [showPassword, setShowPassword] = useState(false)
    const OpenEye = () => {
        setShowPassword(!showPassword)
    }

    return (
        <>
            <div className="input-container">
                <label className="input-label">{props.name}
                    <div className="input-outside">
                        <input onChange={validation} className="input-inside" type={showPassword ? "text" : "password"} placeholder={props.placeholder} />
                        <button onClick={OpenEye}><img src={showPassword ? "../eye.svg" : "../closed-eye.svg"} alt="" />
                        </button>
                    </div>
                </label>

            </div>
        </>
    );
}

export default InputPassword;