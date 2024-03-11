import React, { useState } from 'react';

const QuestionAdd = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [genre, setGenre] =useState('');
  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a question');
      return;
    }
    if (!genre) {
      alert('Please add a question');
      return;
    }
    

    onAdd({question: text, genre: genre})
    setText('') 
    setGenre('');
   };

  return (
    <div className='question'>
      <h1>Create A question</h1>
      <form className='form' onSubmit={onSubmit}>
        <label>
          <h3>Question:</h3>
        </label>
        <input
        // className='input'
          type='text'
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <input
        // className='input'
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className='submit' type='submit'>SAVE</button>
      </form>
    </div>
  );
};

export default QuestionAdd;
