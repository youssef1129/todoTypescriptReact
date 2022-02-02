import React, { useState,FC,useMemo } from 'react';
import { ImCancelCircle } from 'react-icons/im'
import { Itodo } from '../models/Itodo';
import '../styles/todo.css'
var randomColor = require('randomcolor')

interface props {
    todos: Array<Itodo>;
    todo: string;
    id:number;
    removeTodo : (id:number)=>void
}

const DoneTodo:FC<props> = ({todos,todo,id,removeTodo}) => {
    const rndm = useMemo(()=>{
        const g= randomColor({luminosity: 'light'})
        return g
      },[todos])
      
    const [todoU, setTodoU] = useState<string>(todo)
    return <div className='todo' id='tododone' style={{backgroundColor:rndm}}>
        <input readOnly value={todoU} onChange={(e) => setTodoU(e.target.value)} />
        <ImCancelCircle id='tododone' className='delete' onClick={()=>removeTodo(id)} />
    </div>;
};

export default DoneTodo;
