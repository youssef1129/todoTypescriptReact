import React, { FC, useMemo, useState } from 'react';
import '../styles/todo.css'
import { BiEditAlt } from 'react-icons/bi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { AiOutlineSave } from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import { Itodo } from '../models/Itodo';
var randomColor = require('randomcolor')

interface props {
  todos: Array<Itodo>;
  todo: string;
  removeTodo: (id: number) => void;
  id: number;
  updateTodo: (id: number, todoU: string) => void;
  addToDone: (id:number)=>void;
}

const Todo: FC<props> = ({todos, addToDone,todo, id, removeTodo, updateTodo }) => {

  const [isEdit, setIsEdit] = useState<boolean>(true)
  const [todoU, setTodoU] = useState<string>(todo)
  
  const update = () => {
    if (todoU) {
      setIsEdit(!isEdit)
      updateTodo(id, todoU);
    }
  }
  const rndm = useMemo(()=>{
    const g= randomColor({luminosity: 'light'})
    return g
  },[todos])
  return <div style={{backgroundColor:rndm}} className='todo' >
    <input readOnly={isEdit} value={todoU} onChange={(e) => setTodoU(e.target.value)} />
    {
      isEdit ?
        <BiEditAlt className='update' onClick={update} />
        :
        <AiOutlineSave className='update' onClick={update} />
    }
    <RiDeleteBin6Line className='delete' onClick={() => removeTodo(id)} />
    <MdDone onClick={()=>addToDone(id)} className='done'/>
  </div>;
};

export default Todo;
