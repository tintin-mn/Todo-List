import { useRef } from "react";

const AddTodo = ({ onCreate }) => {
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputRef.current.value.trim()) return;
    onCreate(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <form
      className="flex items-center justify-center space-x-2 mx-6"
      onSubmit={handleSubmit}
    >
      <input
        ref={inputRef}
        type="text"
        autoComplete={"off"}
        placeholder="Type new Todo"
        className="w-full bg-gray-700
                            rounded-md px-4 py-2 outline-none text-white font-light"
      />
      <button className="bg-blue-300 text-balance rounded-md px-7 py-2">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
