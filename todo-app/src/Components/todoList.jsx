import React from "react";

const todos = ["Finish homework", "Wash dishes", "Clean room", "Make waffles"];

const Todo = props => <li>{props.todo}</li>;

const TodoList = () => (
    <ul>
        {todos.map(task => (
            <Todo todo={task} key={task} />
        ))}
    </ul>
);

export default TodoList;