import React, { FC, useEffect, useState } from 'react';
import TodoInput from './components/TodoInput';
import Todos from './components/Todos';
import { Itodo } from './models/Itodo';
import './styles/main.css'
import {MdDarkMode,MdWbSunny} from 'react-icons/md'

const App: FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [isDark,setIsDark] = useState<boolean>(false)
  
  const getData = ()=>{
    try {
      return JSON.parse(localStorage.getItem('todos') || '')
    } catch (error) {
      
    }
  }
  
  const [todos, setTodos] = useState<Array<Itodo>>(getData()|| [])
  
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

  const addTodo = ():void => {  
    const dt = new Date()
    if (todo) {
      setTodos([...todos, { id: dt.getTime(), todo , isDone:false}])
      setTodo('')
    }
  }

  const removeTodo = (id:number):void=>{
      setTodos(todos.filter((t)=>t.id!==id))
  }

  const updateTodo = (id:number,todoU:string):void=>{
    setTodos(todos.map((t)=>{
      if(t.id===id){
        t.todo=todoU
      }
      return t;
    }))
  }

  const addToDone = (id:number):void=>{
    setTodos(todos.map((t)=>{
      if(t.id===id){
        t.isDone=true;
      }
      return t;
    }))
  }

  const toMode = ():void=>{
    setIsDark(!isDark)
  }

  return (
    <div className='main' style={{backgroundColor:isDark?'rgb(18 19 23)':'rgb(253, 230, 234)'}}>
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <Todos addToDone={addToDone} updateTodo={updateTodo} todos={todos} removeTodo={removeTodo}/>
      
      {
        isDark?<MdWbSunny style={{color:'#e4d12e'}} onClick={toMode} className='mode'/>:<MdDarkMode onClick={toMode} className='mode'/>
      }
    </div>
  );
}

export default App;
