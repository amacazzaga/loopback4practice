import axios from "axios";
import { useState, useEffect } from "react";
interface Todo {
  id: number;
  description: string;
  title: string;
  isComplete: boolean;
}
////
function App() {
  const [todo, setTodo] = useState<Todo[]>([]);
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

  return <>forrazo</>;
}

export default App;
