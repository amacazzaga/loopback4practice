import axios from "axios";
import { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import TodoType from "./types/todotype";
import TodoForm from "./components/TodoForm";
import "./App.css";

////
function App() {
  const [todo, setTodo] = useState<TodoType[]>([]);
  ////
  const getTodoList = async () => {
    try {
      const response = await axios.get("http://localhost:3000/todos");
      console.log(response);
      setTodo(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  ///
  useEffect(() => {
    getTodoList();
  }, []);
  ///
  return (
    <div className="container d-flex row ">
      {todo.map((todo, _index) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
     <div className="container">
      <TodoForm />
      </div>
    </div>
  );
}
export default App;
