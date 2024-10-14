import { useState} from 'react'

export default function ToDoInput(props) {
    const { addToDoTask, toDoTask, setTaskValue } = props; 
    return (
        <header>
            <input value = { toDoTask } onChange = { (e) =>  { setTaskValue(e.target.value) } } placeholder="Enter the task" />
            <button onClick = { () => { 
                addToDoTask(toDoTask) 
                setTaskValue('')
                }}>
                Add
            </button>
        </header>
    )
}