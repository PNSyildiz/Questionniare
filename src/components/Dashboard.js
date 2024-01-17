import React from 'react'
import Sidebar from '../components/Sidebar'
import Card from './Card'
import { useState, useEffect } from 'react'





const Dashboard = () => {

  const [questionData, setQuestions] = useState([])
  
  useEffect(() =>{
 const getQuestions = async ()=> {
const questionsFromServer = await fetchQuestions()
setQuestions(questionsFromServer)
 }

  getQuestions()
}, [])
// fetch questions from db
const fetchQuestions =async () =>{
  const res = await fetch('http://localhost:5000/Questions')
  const questionData =await res.json()
console.log(questionData)
return questionData
}

// fetch('http://localhost:5000/RatedQuestions')
// .then(response => {
//   // Check if the response status is OK (200)
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   // Parse the response body as JSON
//   return response.json();
// })
// .then(questionData => {
//   // Use the JSON questionData here
//   // setQuestions(questionData)
// })
// .catch(error => {
//   // Handle errors
//   console.error('Fetch error:', error);
// });


  return (
    <div className='dashboard'>
      <Sidebar>
        <div className='Title'>
        <h1>DASHBOARD</h1>
        </div>
        
        <div className='cards'>
          <Card text={"Number of questions"} number={questionData.length}/>
          <Card text={"Agreements"} number={questionData.indexOf.length}/>
          <Card text={"Disagreements"} number={questionData.indexOf.length}/>
          <Card text={"Neutral"} number={"3"}/>
          {/*
          {questionData.map((questionData, index) => (<>
            <Card key={index} text={questionData.text}
            questionData={questionData}/>
             </>
          ))} */}
      
      </div>
      </Sidebar>
    </div>
  )
}

export default Dashboard