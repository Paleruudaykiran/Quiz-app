import './App.css';
import React,{useState,useEffect} from 'react';
import questions  from './components/Questions';
import Displayquestion from './components/Displayquestion';
import DisplayResult from './components/DisplayResult';
import Alert from './components/Alert';

let prev = 0
function App({index}) {
  let qus = questions[index];
  const [questionId,setQuestionId] = useState(0)
  const [marks,setMarks] = useState(0)
  function updateQuestionId(updateMarks) {
    setMarks((prev) => prev + updateMarks)
    if(questionId >= qus.length) {
         setQuestionId(()=>-1)
    }
    else {
      setQuestionId(() => questionId + 1) 
    }
  }
  function startAgain() {
    setMarks(0)
    setQuestionId(0)
  }
  return (
    <div className="App">
      <div className="board">
      {questionId < qus.length ?  
      <Displayquestion  question = {qus[questionId]} updateQuestionId = {updateQuestionId} />
      : <DisplayResult marks={marks} startAgain={startAgain} />
      }
    </div>
    </div>
  );
}

export default App;
