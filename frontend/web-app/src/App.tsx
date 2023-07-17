import axios from "axios";
import { useState, useEffect } from "react";
import Todo from "./components/Todo";
interface Props {
  id: number;
  description: string;
  title: string;
  isComplete: boolean;
}
////
function App() {
  const [todo, setTodo] = useState<Props[]>([]);
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
  return(
    <div>{<Todo/>}</div>
  )
}
export default App;
