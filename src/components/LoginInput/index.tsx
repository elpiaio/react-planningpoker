import React, { useState } from "react";
import "./index.css"

const LoginInput = function ({ placeholder, handle, type }) {
    return (
        <div className="form-control">
            <input className="input input-alt" onChange={handle} placeholder={placeholder} type={type} />
            <span className="input-border input-border-alt"></span>
        </div>
    )
}

export default LoginInput;