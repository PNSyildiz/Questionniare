import React, { useState } from 'react';

const QuestionAdd = ({ onAdd }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a question');
      return;
    }

    onAdd({text})
    setText('') 
   };

  return (
    <div className='question'>
      <h1>Create A question</h1>
      <form className='form' onSubmit={onSubmit}>
        <label>
          <h3>Question:</h3>
        </label>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className='submit' type='submit'>ADD</button>
      </form>
    </div>
  );
};

export default QuestionAdd;
