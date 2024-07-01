import React, { useState } from "react";
import nextId from "react-id-generator";

function AddTodo({ todo, setTodo }) {
  const [value, setValue] = useState("");

  function addTodo() {
    if (value.trim() === "") {
      return;
    }

    const id = nextId();
    setTodo([
      ...todo,
      {
        id: id,
        title: value,
      },
    ]);
    console.log(id);
    setValue("");
  }

  return (
    <div>
      <input
        placeholder="Введите задачу"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button onClick={addTodo}>Добавить</button>
    </div>
  );
}

export default AddTodo;
