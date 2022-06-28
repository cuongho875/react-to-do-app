import React from 'react'
import $  from 'jquery'
export default function CheckBox(props) {
  $(document).ready(()=>{
    $('.checkbox input').each(function(){
      if(props.data.completed===true){
        $('.'+props.data.id).attr("checked",true)
      }
      else{
        $('.'+props.data.id).attr("checked",false)
      }
      console.log(props.data.completed+" "+$(this).attr( "checked" ))
    })
}
  )
  function Checked(){
    props.ChangeStatus(props.data.id)
  }
  return (
    <div className="checkbox">
      <input className={props.data.id} onClick={Checked} type="checkbox"></input>
    </div>
  )
}
