import React, { Component } from 'react';
import getAll from '../../services/todo';
import ToDoList from '../ui/ToDoList';
class App extends Component {
    constructor(){
        super();
        this.state={
            mode: '',
            list:getAll(),
            listFilters:[]
        }
        const text='';
        const index=this.state.list.lastIndex;
        this.AddNew=this.AddNew.bind(this);
        this.Search=this.Search.bind(this);
        this.getAllList=this.getAllList.bind(this);
        this.getActiveList=this.getActiveList.bind(this);
        this.getCompiletedList=this.getCompiletedList.bind(this);
        this.getTextInPut=this.getTextInPut.bind(this);
        this.ChangeStatus=this.ChangeStatus.bind(this)
    }
    render() {
        const actions={};
        Object.assign(actions,
            {'AddNew':this.AddNew},
            {'Search':this.Search},
            {'getAll':this.getAllList},
            {'getActiveList':this.getActiveList},
            {'getCompiletedList':this.getCompiletedList})
        return (
            <ToDoList getTextInPut={this.getTextInPut} ChangeStatus={this.ChangeStatus} data={this.state} actions={actions}/>
        );
    }
    AddNew() {
        let text=this.text
        let index=this.state.list.length;
        if(text){
            this.setState({
                list:Object.assign(this.state.list,{[index]:{
                    id:6,
                   text:text,completed:false
                }}),
                mode:''
            })
        }
    }
    Search() {
        if(this.text){
            let q=this.text.trim().toLowerCase();
            this.setState({
                listFilters:this.state.list.filter(({text})=>text.toLowerCase()==q),
                mode:'search'
            })
        }
    }
    getAllList(){
        this.setState({
            mode:''
        })
    }
    getActiveList(){
        this.setState({
            listFilters:this.state.list.filter(({completed})=>completed===false),
            mode:'active'
        })
    }
    getCompiletedList(){
        this.setState({
            listFilters:this.state.list.filter(({completed})=>completed===true),
            mode:'compileted'
        })
    }
    getTextInPut(textNew){
        this.text=textNew
    }
    ChangeStatus(ID){
        let index=this.state.list.findIndex(list=>list.id===ID);
        if(this.state.list[index].completed){
            this.state.list[index].completed=false
        }
        else{
            this.state.list[index].completed=true
        }
        this.forceUpdate()
    }
}

export default App;