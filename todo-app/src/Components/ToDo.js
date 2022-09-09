import React, { useState } from "react";

  function TodosComponent() {
  const [currentTodo, setCurrentTodo] = useState("");
  const [todos, setTodos] = useState([
    {
      todo: "bake a cake",
      isCompleted: false
    },
    {
      todo: "go for a walk",
      isCompleted: false
    },
    {
      todo: "night coffee",
      isCompleted: false
    }
  ]);

//  const fetchData = async (url) => {
//    const response = await fetch(url);
//    const json = await response.json();
//    return json;
//  }
//  
//  const drawTodos = async () => {
//    const todos = await fetchData("https://jsonplaceholder.typicode.com/todos");


  function createNewTodo(currentTodo) {
    let todosArray = [...todos];
    todosArray.push({
      todo: currentTodo,
      isCompleted: false
    });
    setTodos(todosArray);
  }

  function completeTodo(index) {
    let todosArray = [...todos];
    todosArray[index].isCompleted = !todosArray[index].isCompleted;
    setTodos(todosArray);
  }

  function deleteTodo(index) {
    let todosArray = [...todos];
    todosArray.splice(index, 1);
    setTodos(todosArray);
  }

  return (
    <div>
      <h1> My To-Do List </h1>
      <input
        className="todo-input"
        value={currentTodo}
        onChange={e => {
          setCurrentTodo(e.target.value);
        }}
        onKeyPress={e => {
          if (e.key === "Enter") {
            createNewTodo(currentTodo);
            setCurrentTodo("");
          }
        }}
        placeholder="What's coming next? ..."
      />
      {todos.map((todo, index) => (
        <div key={todo} className="todo">
          <div className="checkbox" onClick={() => completeTodo(index)}>
            {todo.isCompleted && <span>&#x2714;</span>}
          </div>
          <div className={todo.isCompleted ? "done" : ""}>{todo.todo}</div>
          <div className="delete" onClick={() => deleteTodo(index)}>
            &#128465;
          </div>
        </div>
      ))}
      <div className="items">
        {todos.length > 0 && `${todos.length} items`}
      </div>
    </div>
  );
}

export default TodosComponent;