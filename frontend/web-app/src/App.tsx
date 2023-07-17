import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const getTodoList = () => {
    axios.get("http://localhost:3000/todos").then(function (response) {
      // handle success
      console.log(response);
    });
  };
  useEffect(() => {
    getTodoList();
  }, []);

  const [todo, setTodo] = useState({});

  return <>forrazo</>;
}

export default App;
