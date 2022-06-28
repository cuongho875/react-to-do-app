import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FiltersList from './FiltersList';
export default function ToDoList(props) {
  const {list,mode,listFilters}=props.data;
  var listTodo=[];
  switch(mode){
    case '':
      listTodo=list
      break;
    default:
      listTodo=listFilters
  }
  function DisplayList(){
    if(listTodo.length>0){
      return <FiltersList ChangeStatus={props.ChangeStatus} listTodo={listTodo}/>
    }
    else{
      return (<div>Empty Item</div>)
    }
  }
  return (
    <div className="container">
        <div className="row">
            <div className="todoList">
                <Header {...props}></Header>
                {DisplayList()}
            </div>
              <Footer {...props} count={listTodo.length}/>
        </div>
    </div>
  )
}
