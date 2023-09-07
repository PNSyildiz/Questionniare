import React, { useState, useEffect } from 'react';

const QuestionWithRating = ({ data, onUpdateRating }) => {
  const [selectedOption, setSelectedOption] = useState('Neutral'); // Default to Neutral

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    onUpdateRating(event.target.value);
  };

  return (
    <div className="radio-question">
      <h1>{data}</h1>
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
  // const [questions, setQuestions] = useState([]);

  
  // useEffect(() => {
  //   const getQuestions = async () => {
  //     const questionsFromServer = await fetchQuestions();
  //     setQuestions(questionsFromServer);
  //   };

  //   getQuestions();
  // }, []);

  // Fetch questions from db


  return (
    <div>
      {/* {questions.map((questionData) => (
        <QuestionWithRating
          key={questionData.id} // Make sure to use a unique key for each question
          question={questionData.question}
          onUpdateRating={(rating) => {
            // Handle the rating update here if needed
            console.log(`Question: ${questionData.question}, Rating: ${rating}`);
          }}
        />
      ))} */}
    </div>
  );
};

export default QuestionsList;
