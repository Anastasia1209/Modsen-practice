import React from "react";

function TodoList({ todo, setTodo }) {
  return (
    <div>
      {todo.map((item) => (
        <div key={item.id}>
          <div>{item.title}</div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
