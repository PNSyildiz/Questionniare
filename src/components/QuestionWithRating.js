import React, { useState, useEffect } from 'react';

const QuestionWithRating = ({ questions, onUpdateRating }) => {
  const [selectedOption, setSelectedOption] = useState('Neutral'); // Default to Neutral

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    onUpdateRating(event.target.value);
  };

  return (
    <div className="radio-question">
      <h3>{questions}</h3>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            value="Agree"
            checked={selectedOption === 'Agree'}
            onChange={handleOptionChange}
          />
          Agree
        </label>
        <label>
          <input
            type="radio"
            value="Neutral"
            checked={selectedOption === 'Neutral'}
            onChange={handleOptionChange}
          />
          Neutral
        </label>
        <label>
          <input
            type="radio"
            value="Disagree"
            checked={selectedOption === 'Disagree'}
            onChange={handleOptionChange}
          />
          Disagree
        </label>
      </div>
    </div>
  );
};

const QuestionsList = () => {
  const [questions, setQuestions] = useState([]);

  
  useEffect(() => {
    const getQuestions = async () => {
      const questionsFromServer = await fetchQuestions();
      setQuestions(questionsFromServer);
    };

    getQuestions();
  }, []);

  // Fetch questions from db
  const fetchQuestions =async () =>{
    const res = await fetch('http://localhost:5000/RatedQuestions')
    const questions =await res.json()
  
    return questions;
  }

  return (
    <div>
      {questions.map((questions) => (
        <QuestionWithRating // Make sure to use a unique key for each question
         key={questions.id} questions={questions.text}
          onUpdateRating={(rating) => {
            // Handle the rating update here if needed
            console.log(`Question: ${questions.question}, Rating: ${rating}`);
          }}
        />
      ))}
    </div>
  );
};

export default QuestionsList;
