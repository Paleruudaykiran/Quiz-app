import React,{useState} from 'react'
import App from "../App"
let topics = ["Operating System","C language"]
const SelectTopic = () => {
    console.log("SelectTopic called")
    const [topic,setTopic] = useState(null)
    function topicSelected(e) {
        e.target.style.backgroundColor = "red"
        e.target.style.color = "black"
        setTopic(() => e.target.id)
    }
    return (
        <div>
           <ul className="list-of-topics">
               {topics.map((value,index) => {
                   return <li className="topic" key={index} id={index} onClick={(e) => topicSelected(e)}>{value}</li>
               }) }
           </ul>
           {
               topic == null ? '' : <App index={topic}></App>
           } 
        </div>
    )
}

export default SelectTopic
