import React from 'react';
import shuffle from 'lodash.shuffle';

/*Component for shwoing questions and answers*/
export default function Question({ question, answerQuestion }) {

  //concat answers from Json response
  const answers = shuffle([
    ...question.incorrect_answers,
    question.correct_answer,
  ]);

  return (
    <div className="question">
      <h2 dangerouslySetInnerHTML={{ __html: question.question }} />

      {answers.map((answer, index) => (
        <button
          key={index}
          onClick={() => answerQuestion(answer)}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      ))}
    </div>
  );
}

