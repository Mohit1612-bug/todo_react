import React,{useContext} from "react";

import {
    ListGroup,
    ListGroupItem,
} from 'reactstrap';

import {FaCheckDouble} from 'react-icons/fa';

import TodoContext from '../context/TodoContext';

import {REMOVE_TODO} from '../context/action.types';

const Todos=()=>{
    const {todos,dispatch}=useContext(TodoContext);
    return(
        <ListGroup classname="mt-5 mt-2 items">
            {todos.map(todo=>(
                <ListGroupItem key={todo.id}>
                    {todo.todoString}
                    <span className="float-end" onClick={()=>{
                        dispatch({
                            type:REMOVE_TODO,
                            payload:todo.id,
                        })
                    }}><FaCheckDouble></FaCheckDouble></span>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default Todos;