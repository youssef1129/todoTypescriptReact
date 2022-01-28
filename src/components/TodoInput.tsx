import React, { FC, FormEvent } from 'react';
import { GrAddCircle } from 'react-icons/gr'

interface props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    addTodo: ()=>void;
}

const TodoInput: FC<props> = ({ todo, setTodo,addTodo }) => {

    const onSubmit=(e:FormEvent):void=>{
        e.preventDefault();
        addTodo()
    }

    return <form id='form1' onSubmit={onSubmit}>
        <input value={todo} onChange={(e)=>setTodo(e.target.value)} type='text' placeholder='Add todo' />
        <button type='submit'><GrAddCircle /></button>
    </form>;
};

export default TodoInput;
