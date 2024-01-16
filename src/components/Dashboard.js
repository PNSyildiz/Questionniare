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
  const res = await fetch('http://localhost:5000/RatedQuestions')
  const data =await res.json()
console.log(data)
return data
}

fetch('http://localhost:5000/RatedQuestions')
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


  return (
    <div className='dashboard'>
      <Sidebar>
        <div className='Title'>
        <h1>DASHBOARD</h1>
        </div>
        <div className='cards'>
      <Card text='Number of Questions' number='3' />
      <Card text='Agreements' number='1' />
      <Card text='Disagreements' number='1' />
      <Card text='Neutral' number='1' />
      </div>
      </Sidebar>
    </div>
  )
}

export default Dashboard