 import React, { useState } from 'react'

 function Checkboxes({text}) {
  const [isChecked, setIsChecked] = useState({
    agree: false,
    disagree: false,
    neutral: false
  });
 
  const handleCheckboxChange = (event) => {
    const { name } = event.target;

    setIsChecked(prevState => ({
      agree: name === 'agree',
      disagree: name === 'disagree',
      neutral: name === 'neutral'
    }));
  };


   return(  <div className='Checkboxes'>
   <label className='label'>Agree
      <input
        type="checkbox"
        name="agree"
        checked={isChecked.agree}
        onChange={handleCheckboxChange}
      />
      
    </label>
    <br />
    <label className='label'>Disagree
      <input
        type="checkbox"
        name="disagree"
        checked={isChecked.disagree}
        onChange={handleCheckboxChange}
      />
      
    </label>
    <br />
    <label className='label'> Neutral
      <input
        type="checkbox"
        name="neutral"
        checked={isChecked.neutral}
        onChange={handleCheckboxChange}
      />
    </label>
  </div>
 
   )}
 
 export default Checkboxes;