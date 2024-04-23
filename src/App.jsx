import AddTodo from "./components/AddTodo.jsx";
import BoxTodo from "./components/BoxTodo.jsx";
import { useState } from "react";
import Header from "./components/Header.jsx";
import { v4 as uuid } from "uuid";

const App = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);

  const handleDeleteTodo = (id) => {
    const updateTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    localStorage.setItem("todos", JSON.stringify(updateTodo));
    setTodos(updateTodo);
  };

  const createTodo = (title) => {
    const updateTodo = [...todos, { id: uuid(), title }];
    localStorage.setItem("todos", JSON.stringify(updateTodo));
    setTodos(updateTodo);
  };

  return (
    <main className="bg-[#31304D] min-h-screen w-full py-16 font-Nunito">
      <div className="flex flex-col items-center justify-center space-y-8 m-auto w-2/3 ">
        <Header />
        <AddTodo onCreate={createTodo} />
        <BoxTodo onDelete={handleDeleteTodo} />
      </div>
    </main>
  );
};

export default App;
