import React from "react";


/* 
Props:
    * value     [string]   : Default value for input element
    * setValue  [function] : Hook function for setting value outside of component
    * type      [string]   : Type of input
    * style     [json]     : Inline element style 
    * className [string]   : Addition class style for component
*/
const InputComponent = (props) => {
    return (
        <input
            className={`input-component ${props?.className ?? ''}`}
            value={props?.value}
            onChange={(evt) => {
                if (props?.setValue)
                    props?.setValue(evt.target.value)
            }}
            type={props?.type}
            style={props?.style}
            placeholder={props?.placeholder}
        />
    )
}

export default InputComponent;
