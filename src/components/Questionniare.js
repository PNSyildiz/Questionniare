import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import QuestionWithRating from './QuestionWithRating'

const Questionniare = () => {
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