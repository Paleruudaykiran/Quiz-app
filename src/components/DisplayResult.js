import React from 'react'

const DisplayResult = ({marks,startAgain}) => {
    return (
        <div>
            <div className="marks">
                {marks}
            </div>
            <button className="btn" onClick={() => startAgain()}>Play again</button>
        </div>
    )
}

export default DisplayResult
