import React from 'react'
import ToDoItem from './ToDoItem'
export default function FiltersList(props) {
  return (
        <ul>
            {
                (Object.keys(props.listTodo)).map((key)=>{
                    return(
                    <ToDoItem key={key} ChangeStatus={props.ChangeStatus} data={props.listTodo[key]}/>
                    )
                })                
            }
        </ul>
  )
}
