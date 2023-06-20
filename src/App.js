import React, { Component } from "react";
// import Counter from "./Counter";
// import Dropdown from "./Dropdown";
// import ColorPicker from './ColorPicker';
import TodoList from "./TodoList";
import initialTodos from "./todos.json";

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];
class App extends Component {
  state = {
    todos: initialTodos,
  }
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId)
    }))
  }
  render() {
    const {todos} = this.state;
    const completedTodos = todos.filter(todo => todo.completed);
    console.log(completedTodos.length)
    return (
      <>
      {/* <Counter /> */}
      {/* <Dropdown /> */}
      {/* <ColorPicker options={colorPickerOptions} /> */}
      <div>
        <p>Общее кол-во туду:{todos.length}</p>
        <p>Кол-во выполненых туду:</p>
      </div>
      <TodoList todos={todos} onDeleteTodo={this.deleteTodo}/>
      </>
    )
  }
}

export default App;