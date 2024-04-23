import ItemTodo from "./ItemTodo.jsx";

const BoxTodo = ({todos, onDelete}) => {
    const hasTodos = todos.length > 0;

    const renderedTodos = todos?.map((todo) => {
        return <ItemTodo key={todo.id} todo={todo} onDelete={onDelete}/>
    })

    return (
        hasTodos ? <div
                className="flex flex-col items-center justify-center space-y-4 w-80 md:min-w-[450px] border-2 rounded-md px-8 py-4">
                {renderedTodos}
            </div>
            : <span></span>
    )
};

export default BoxTodo;