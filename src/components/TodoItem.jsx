import { SlTrash } from "react-icons/sl";

const TodoItem = ({ todo, onDelete }) => {
  const deleteTodo = () => {
    onDelete(todo.id);
  };

  return (
    <div className="flex items-center justify-between w-full border-b-[1px] pb-4 px-2 last:border-none last:pb-0">
      <p className="text-white font-light">{todo.title}</p>
      <div>
        <button onClick={deleteTodo}>
          <SlTrash size={20} className="fill-rose-700 hover:fill-rose-500" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
