import React from 'react'
import CheckBox from './CheckBox'
import $ from 'jquery'
export default function ToDoItem(props) {
  $(document).ready(()=>{
    $('.checkboxs label').each(function(){
      if(props.data.completed===true){
        $('.'+props.data.id).css("text-decoration", "line-through")
      }
      else{
        $('.'+props.data.id).css("text-decoration", "none")
      }
    })
  })
  return (
    <li >
      <div className="checkboxs">
        <label className={props.data.id}>
        <CheckBox {...props}/> {props.data.text}
        </label>
      </div>
    </li>
  )
}
