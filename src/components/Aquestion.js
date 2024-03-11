import { FaTimes, FaEdit } from "react-icons/fa";
import { useState} from "react";

const Aquestion = ({ question, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(question.question, question.genre);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleTextChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleSaveClick = () => {
    fetch(`http://localhost:8080/AddQuestion/${question.questionId}`, {
      method: "PUT", // Use the appropriate HTTP method (e.g., PUT or PATCH).
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: editedText , genre: editedText}), // Send the updated question text.
    })
      .then((response) => {
        if (response.ok) {
          setIsEditing(false); // Disable editing mode after successful update.
        } else {
          // Handle errors here.
          console.error("Failed to update question");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };


  return (
    <div className="Aquestion">
    { isEditing ? (
        <div>
          <input type="text" value={editedText} onChange={handleTextChange} />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <h3>
          {editedText} <FaEdit onClick={handleEditClick} />{" "}
          <FaTimes onClick={(question) => onDelete(question.questionId)} />
        </h3>
      )}
    </div>
  );
};

export default Aquestion;
