import React from 'react'
import { useState} from 'react'

export default function ToDoCard(props) {
  const { children, deleteToDoTask, editToDoTask, index } = props
  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(props.toDoTasks[index])

  const handleSave = () => {
    editToDoTask(index, editedText)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditedText(children)
    setIsEditing(false)
  } 

  return (
    <li className='todoItem'>
      { isEditing ? (
          <>
            <input 
              type="text" 
              value={ editedText }
              className = "editTxt" 
              onChange={(e) => setEditedText(e.target.value) }
            />
            <div className='editActionsContainer'>
              <button onClick={
                handleSave
                 }>
                <i class="fa-solid fa-check fa-2xl"></i>
              </button>
              <button onClick={ 
                handleCancel
                 } >
                <i class="fa-solid fa-xmark fa-2xl"></i>
              </button>
            </div>
          </>
        ) 
      : (
          <>
            { children }
            <div className='actionsContainer'>
              <button onClick={() => {
                setIsEditing(true)
                setEditedText(props.toDoTasks[index])
              }}>
                <i className="fa-solid fa-pen-to-square"></i>
              </button>

              <button onClick = { () => { deleteToDoTask(index) } }>
                <i className="fa-regular fa-trash-can"></i>
              </button>
            </div>
          </>
        )
      }
    </li>
  )
}