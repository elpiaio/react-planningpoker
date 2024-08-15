import React from "react";
import './index.css';

const PersonalizedTitle = function ({text}) {
    return (
        <button className="button" data-text="Awesome">
            <span className="actual-text">&nbsp;{text}&nbsp;</span>
            <span aria-hidden="true" className="hover-text">&nbsp;{text}&nbsp;</span>
        </button>
    )
}

export default PersonalizedTitle;