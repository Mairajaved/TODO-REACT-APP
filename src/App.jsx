import { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return <div className="todo-app">{loading ? <Loader /> : <TodoList />}</div>;
}

export default App;
