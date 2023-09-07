import Aquestion from "./Aquestion"
const Questions = ({questions, onDelete}) => {

  return (
    
   <div className="quest">
   {questions.map((question) =>(
    <Aquestion key={question.id} question={question} onDelete={onDelete} />))}
   </div>
  )
}

export default Questions