import React, { useState, useEffect, useCallback }from 'react';
import Question from './components/Question';
import CategorySelector from './components/CategorySelector';
import ResultModal from './components/ResultModal';
import Scoreboard from './components/Scoreboard';
import './App.css';

export default function App() {
  const [isCorrect, setIsCorrect] = useState(null);
  const[selectedCateogry, setSelectedCategory] = useState('any');

  const[correctScore, setCorrectScore] = useState(0);
  const [wrongScore, setWrongScore] = useState(0);

  //Telling react not change this 
  const getQuestion = useCallback(()=>{
    setIsCorrect(null);

    let url = 'https://opentdb.com/api.php?amount=1';
    if(selectedCateogry !== 'any')
      url += `&category=${selectedCateogry}`;

    fetch(url)
      //since we using fetch, so have to warp data
      .then((res) => res.json())
      .then((data) => setQuestion(data.results[0]));
  }, [selectedCateogry])


  const [question, setQuestion] = useState(null); // init question = null

  //how we call getQuestion, sincn we using this question when this App start from react
  //it will call once, and then if any thing chenges in the array, then react re-run for this effect
  useEffect(()=>{
    getQuestion();
  }, [getQuestion, selectedCateogry]); 


  function handleQuestionAnswered (answer){
    const isAnswerCorrect = answer === question.correct_answer;
    setIsCorrect(isAnswerCorrect);

    if(isAnswerCorrect)
      setCorrectScore(score => score + 1);
    else  
     setWrongScore(score => score+1);

  }

  return (
    <div className="app">
      {/* show the result modal ----------------------- */}
      {isCorrect !== null &&  <ResultModal isCorrect={isCorrect} question={question} getQuestion={getQuestion}/>}

      {/* question header ----------------------- */}
      <div className="question-header">
        <CategorySelector 
          category={selectedCateogry}  
          chooseCategory={setSelectedCategory}/>
        <Scoreboard correct={correctScore} wrong={wrongScore}/>
      </div>

      {/* the question itself ----------------------- */}
      <div className="question-main">
        {question && <Question question={question} answerQuestion = {handleQuestionAnswered}/>}
      </div>

      {/* question footer ----------------------- */}
      <div className="question-footer">
        <button onClick = {getQuestion}>Go to next question 👉</button>
      </div>
    </div>
  );
}
