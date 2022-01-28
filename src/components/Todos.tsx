import React, { FC } from 'react';
import '../styles/main.css'
import { Itodo } from '../models/Itodo'
import Todo from './Todo';
import DoneTodo from './DoneTodo';
var randomColor = require('randomcolor')

interface props {
  todos: Array<Itodo>;
  removeTodo: (id: number) => void;
  updateTodo: (id: number, todoU: string) => void;
  addToDone: (id:number)=>void;
}

const Todos: FC<props> = ({ addToDone,todos, removeTodo, updateTodo }) => {
  return <div className='todos'>
    <div>
      {
        todos.map((t: Itodo) => {
          if (!t.isDone) {
            return <Todo addToDone={addToDone} key={t.id} updateTodo={updateTodo} id={t.id} todo={t.todo} removeTodo={removeTodo} />
          }
        })
      }
    </div>
    {todos.some(t=>t.isDone===true) &&<div className='donetodos' style={{backgroundColor: randomColor({luminosity: 'dark',format: 'rgba',alpha: 0.1})}}>
      {
       todos.map((t: Itodo) => {
          if (t.isDone) {
            return <DoneTodo  key={t.id}  id={t.id} todo={t.todo} removeTodo={removeTodo}/>
          }
        })
      }
    </div>}
  </div>;
};

export default Todos;
