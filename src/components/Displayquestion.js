import React,{useState,useEffect} from 'react';
import Alert from './Alert';
let ans = 0
const Displayquestion = ({question,updateQuestionId}) => {
    const [alert,setAlert] = useState(-1)
    let userAns = null
    function setUserAns(e) {
        userAns = e.target.innerText
        if(userAns === question.ans) {
            setAlert(1)
            ans = 1
        }
        else {
            ans = 0
            setAlert(0)
        }
        setTimeout(()=>{
            setAlert(-1)
            updateQuestionId(ans)
        },2000)
    }
    return (
        <div className="chat">
            {alert != -1 && <Alert mark={alert} />}
            <div className="question">
                {question.question}
            </div>
            <ul className="options">
                <li style={{backgroundColor:"khaki"}} onClick={(e)=> setUserAns(e)}>{question.a}</li>
                <li onClick={(e)=> setUserAns(e)}>{question.b}</li>
                <li onClick={(e)=> setUserAns(e)}>{question.c}</li>
                <li onClick={(e)=> setUserAns(e)}>{question.d}</li>
            </ul>
           <button className="btn next-btn" onClick={() => updateQuestionId(ans)}>next</button>
        </div>
    )
}

export default Displayquestion
