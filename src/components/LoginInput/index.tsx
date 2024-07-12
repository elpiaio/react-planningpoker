import React from "react";
import "./index.css"

const LoginInput = function () {
    return (
        <div className="form-control">
            <input className="input input-alt" placeholder="Email" type="text" />
            <span className="input-border input-border-alt"></span>
        </div>
    )
}

export default LoginInput;