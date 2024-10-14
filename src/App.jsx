import { useState, useEffect } from 'react'
import ToDoList from './components/ToDoList';
import ToDoInput from './components/ToDoInput';

function App() {

  const [toDoTasks, setToDoTasks] = useState([
  ])
  const [toDoTask, setTaskValue] = useState('')

  function persistData(newToDoTasks){
    localStorage.setItem('toDoTasks', JSON.stringify({toDoTasks: newToDoTasks}))
  }

  function addToDoTask(newTask){
    const newToDoTasks = [...toDoTasks, newTask]
    setToDoTasks(newToDoTasks)
    persistData(newToDoTasks)
  }
  
  function deleteToDoTask(index){
    const newToDoTasks = toDoTasks.filter((toDoVal, toDoIndex) => {
      return toDoIndex !== index
    })
    setToDoTasks(newToDoTasks)
    persistData(newToDoTasks)
  }
  
  function editToDoTask(index, editedText){
    const newToDoTasks = [...toDoTasks]
    newToDoTasks[index] = editedText
    setToDoTasks(newToDoTasks)
    persistData(newToDoTasks)
  }

  useEffect(() => {
    if(!localStorage){
      return
    }
    let localTodos = localStorage.getItem('toDoTasks')
    if (!localTodos){
      return
    }
    localTodos = JSON.parse(localTodos).toDoTasks
    setToDoTasks(localTodos)
  }, [])

  return (
    <>
      <ToDoInput addToDoTask = { addToDoTask } toDoTask = {toDoTask} setTaskValue = { setTaskValue }/>
      <ToDoList deleteToDoTask = {deleteToDoTask} editToDoTask = {editToDoTask} toDoTasks = { toDoTasks }/>
    </>
  )
}

export default App
