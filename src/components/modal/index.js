import React from "react";


export default function Modal(props){
    return (
        <div className="modal-wrapper">
            <div className={`modal ${props?.className ?? ''}`} style={props?.style}>
                {props?.children}
            </div>
            <div className="background" onClick={()=>{if(props?.close) props?.close()}}/>
        </div>
    )
}