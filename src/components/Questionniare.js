import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import QuestionWithRating from './QuestionWithRating'

const Questionniare = () => {
  const [questionData, setQuestions] = useState([])
  
//   useEffect(() =>{
//  const getQuestions = async ()=> {
// const questionsFromServer = await fetchQuestions()
// setQuestions(questionsFromServer)
//  }

//   getQuestions()
// }, [])
// // fetch questions from db
// const fetchQuestions =async () =>{
//   const res = await fetch('http://localhost:5000/RatedQuestions')
//   const data =await res.json()

// return data
// }

fetch('http://localhost:5000/questions')
.then(response => {
  // Check if the response status is OK (200)
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  // Parse the response body as JSON
  return response.json();
})
.then(data => {
  // Use the JSON data here
  // setQuestions(data)
})
.catch(error => {
  // Handle errors
  console.error('Fetch error:', error);
});

// console.log(question)
  return (
    <div className='Questionniare'>
      {}
          <Sidebar>
        <div className='QsWithRatings'>
        <QuestionWithRating />
        </div>
      </Sidebar>
    </div>
  )
  }

export default Questionniare