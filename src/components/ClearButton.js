import React from 'react'

function ClearButton(props) {
    return (
        <p className="col-auto">
        <button className="button" onClick={()=>props.handleClear(props.children)}>
             {props.children}
        </button>
     </p>
    )
}

export default ClearButton
