import React from 'react';
import "../css/Button.css"

function Button(props) {
    return (
        <p className="col-auto">
               <button className="button" 
onClick={()=>props.handleClick(props.children)}>
                    {props.children}
               </button>
            </p>
    )
}

export default Button
