import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Person from './components/Person';
import TodoList from './components/TodoList';
import ShoppingList from './components/ShoppingList/ShoppingList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
   <div>

    {/* <TodoList /> */}

    {/* <App /> */}

    <ShoppingList />
   
    
   </div>
);

