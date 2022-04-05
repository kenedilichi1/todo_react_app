import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

import {Header} from './components/header'
import {Hero} from './components/hero'
import {Body} from './components/body'


function App() {
  
  
  // get request
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [completed, setCompleted] = useState([])

  async function getTodos(){
    const todo = await axios.get('http://localhost:5001/todos');
    return setTodos(todo.data);
    
  }


  // post request
    
  async function addTodo(){
    const task = {task: `${input}`}
    const postTodo = await axios.post('http://localhost:5001/todo', task);
    getTodos()
  }

  // delete function
  async function removeTodo(id){
    const deleteTodo = await axios.delete(`http://localhost:5001/todo/id?id=${id + 1}`);
    getTodos() 
  }

  // completed task

  async function completedTodo(id){
    const completedTask = await axios.put(`http://localhost:5001/todo/id?id=${id + 1}`);
    setCompleted(completedTask.data.payload);
    getTodos()
    console.log(completedTask.data.payload)

  }
  // async function getCompleted(){
  //   const getCompletedTasks = await axios.get('http://localhost:5001/completed/todo');
  //   setCompleted(getCompletedTasks.data);
  // }
  // async function storeCompleted(){
  //   const tasks = await axios(getCompleted())
  //   return tasks
  // }
  
  useEffect(()=>{
    (async function(){
      const displayTodo = await getTodos()
      return displayTodo
    })()
  }, [])



  return (
    <div className="app__main-container">
      <Header />
      <Hero addTodo={addTodo} todo ={input}  setInput={setInput}/>
      <Body todos={todos} setTodos={setTodos} getTodos={getTodos} removeTodo={removeTodo} completed={completed} markCompleted={completedTodo}/>
    </div>
  );
}

export default App;
