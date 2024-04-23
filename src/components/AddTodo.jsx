import {useState} from "react";

const AddTodo = ({onCreate}) => {

    const [title, setTitle] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        onCreate(title)
        setTitle('')
    }

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    return (
        <div className="flex items-center justify-center space-x-2 mx-6 min-w-full">
            <form onSubmit={handleSubmit}>
                <input value={title} onChange={handleChange} type="text" autoComplete={"off"}
                       placeholder="Type new Todo"
                       className="w-full bg-gray-700
                            rounded-md px-4 py-2 outline-none text-white font-light"/>
            </form>
            <button className="bg-blue-300 text-balance rounded-md px-7 py-2">Add</button>
        </div>
    );
};

export default AddTodo;
