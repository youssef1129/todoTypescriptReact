import React, { useState,FC } from 'react';
import { ImCancelCircle } from 'react-icons/im'
import '../styles/todo.css'
var randomColor = require('randomcolor')

interface props {
    todo: string;
    id:number;
    removeTodo : (id:number)=>void
}

const DoneTodo:FC<props> = ({todo,id,removeTodo}) => {
    const [todoU, setTodoU] = useState<string>(todo)
    return <div className='todo' id='tododone' style={{backgroundColor:randomColor({luminosity: 'bright'})}}>
        <input readOnly value={todoU} onChange={(e) => setTodoU(e.target.value)} />
        <ImCancelCircle id='tododone' className='delete' onClick={()=>removeTodo(id)} />
    </div>;
};

export default DoneTodo;
