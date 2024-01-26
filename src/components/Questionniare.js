import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import QuestionWithRating from './QuestionWithRating'

const Questionniare = () => {
  return (
    <div className='Questionniare'>
      {}
          <Sidebar>
            <h1>Rate These Questions</h1>
        <div className='QsWithRatings'>
        <QuestionWithRating />
        </div>
      </Sidebar>
    </div>
  )
  }

export default Questionniare