import React from 'react'
import ToDoCard from './ToDoCard'

export default function ToDoList(props) {
  const { toDoTasks } = props
  return (
    <ul className='main'>
      {
        toDoTasks.map ((todo, toDoIndex) => {
          return (
            <ToDoCard { ...props } key = { toDoIndex } index = { toDoIndex }>
              <p>{ todo }</p>
            </ToDoCard>
          )
        }
      )
      }
    </ul>
  )
}
