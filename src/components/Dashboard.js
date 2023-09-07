import React from 'react'
import Sidebar from '../components/Sidebar'
import Card from './Card'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Sidebar>
        <div className='Title'>
        <h1>DASHBOARD</h1>
        </div>
        <div className='cards'>
          
      <Card text='Number of Questions' number='3' />
      <Card text='Number of Questions' number='1' />
      <Card text='Number of Questions' number='1' />
      <Card text='Number of Questions' number='1' />
      </div>
      </Sidebar>
    </div>
  )
}

export default Dashboard