import React,{useState} from 'react'
import App from '../App'
import SelectTopic from '../components/SelectTopic'

const Start = () => {
    const [play,setPlay] = useState(0)
    return (
        <div>
            <h1 className="title">Quiz App</h1>
        <div className="start">
            {
                play == 0 ? <button className="btn" onClick={() => setPlay(1)}>Let's play</button>
                : <SelectTopic />
            }
        </div>
        </div>
    )
}

export default Start
