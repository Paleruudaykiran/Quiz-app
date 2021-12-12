import React from 'react'
const Alert = ({mark}) => {
    return (
        <div className={ mark == 1 ? "alert correct" : "alert wrong"}>
            { mark == 1 ? "Correct Answer" : "Wrong Answer"}
        </div>
    )
}

export default Alert
