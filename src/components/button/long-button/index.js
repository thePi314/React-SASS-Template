import React from "react";

import ButtonComponent from "..";


const LongButtonComponent = (props) => {
    return (
        <ButtonComponent
            onClick={props?.onClick}
            style={props?.style}
            className="long"
        >
            {props?.children}
        </ButtonComponent>
    )
}

export default LongButtonComponent;