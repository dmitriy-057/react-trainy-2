import React from "react";
import "./TodoList.css"

const TodoList = ({todos, onDeleteTodo, onToggleCompleted}) => 
(<ul className="TodoList"> {todos.map(({id,text}) => (
    <li key={id} className='TodoList__item'>
    <p className="TodoList__text">{text}</p>
    <input 
    className='TodoList__checkbox'
    type="checkbox"
    onChange={()=> {onToggleCompleted(id)}}
    />
    <button onClick={()=> onDeleteTodo(id)}>Удалить</button>
    </li>
)
)}
</ul>)

export default TodoList;