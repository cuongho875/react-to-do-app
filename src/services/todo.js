import React from 'react'

export default function getAll() {
  return [
    {
        id: 1,
        text: 'Learn Javascript',
        completed: false
    },
    {
        id: 2,
        text: 'Learn React',
        completed: true
    },
    {
        id: 3,
        text: 'Build a React App',
        completed: false
    }
  ]
}
export function addToDo(list,text){
  
  if(text){
    let id = list[list.length-1].id;
    let item = {
      id:id,
      text:text,
      completed:false
    }
    list.push(item);
  }
}
