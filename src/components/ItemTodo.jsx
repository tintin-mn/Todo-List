import {SlTrash} from "react-icons/sl";

const ItemTodo = ({todo, onDelete}) => {
    const deleteTodo = () => {
        onDelete(todo.id)
    }

    return (
        <div className="flex items-center justify-between w-full border-b-[1px] pb-4 px-2 last:border-none last:pb-0">
            <p className="text-white font-light">{todo.title}</p>
            <div>
                <button onClick={deleteTodo}>
                    <SlTrash fill="white" className="hover:fill-gray-400"/>
                </button>
            </div>
        </div>
    );
};

export default ItemTodo;