import React from 'react'
import $ from 'jquery';
export default function Filters(props) {
  const  {mode}=props.data;
  $(document).ready(()=>{
    switch(mode){
      case 'active':
        $('.filters-all').removeClass('active')
        $('.filters-compileted').removeClass('active')
        $('.filters-active').addClass('active')
        break;    
      case 'compileted':
        $('.filters-all').removeClass('active')
        $('.filters-compileted').addClass('active')
        $('.filters-active').removeClass('active')
        break;    
        case '':
        $('.filters-all').addClass('active')
        $('.filters-compileted').removeClass('active')
        $('.filters-active').removeClass('active')
        break;
      default:
        $('.filters-all').removeClass('active')
        $('.filters-compileted').removeClass('active')
        $('.filters-active').removeClass('active') 
  }
  })
  return (
    <div className="filters">
        <a href="#" className="filters-all" onClick={props.actions['getAll']}>All</a>
        <a href="#" className="filters-active" onClick={props.actions['getActiveList']}>Active</a>
        <a href="#" className="filters-compileted" onClick={props.actions['getCompiletedList']}>Compileted</a>
    </div>
  )
}
