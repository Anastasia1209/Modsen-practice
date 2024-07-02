import "./App.css";
import AddTodo from "./components/TodoList/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import GetImage from "./components/ImageAPI/GetImage";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "first",
    },
    {
      id: 2,
      title: "sec",
    },
    {
      id: 3,
      title: "third",
    },
  ]);

  return (
    <div className="App">
      <label className="label">TodoList</label>

      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />

      <label className="label">ImageAPI</label>

      <GetImage />

      <label className="label">ToggleButton</label>
      <ToggleButton />
    </div>
  );
}

export default App;
