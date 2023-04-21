import React from 'react';

const Todos = [

    { name: "sleeping", isCompleted: true},
    
    { name: "eating", isCompleted:false},

    { name: "instagram", isCompleted: true},

    { name: "playing", isCompleted: false}

]

const TodoList = () => {
  return (
    <div>
    <ul>
        {

     Todos.map((todo)=> <li> {todo.name}, <input type='checkbox' defaultChecked={todo.isCompleted}></input> </li> )
 
    }     
    </ul>
       
    </div>
  )
}

export default TodoList