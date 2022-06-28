import React from 'react'
import $ from 'jquery';
export default function InputWrapper(props) {
  function BtnAddNew(){
    props.getTextInPut($('.addNew').val())
  }
  return (
    <input type="text" className='addNew' onChange={BtnAddNew} placeholder="Add new"/>
  )
}
