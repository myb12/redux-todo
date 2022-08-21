import { useState } from "react";
import { useDispatch } from "react-redux";
import cancelImage from "../assets/images/cancel.png";
import deleteTodo from "../redux/todos/thunk/deleteTodo";
import updateColor from "../redux/todos/thunk/updateColor";
import updateStatus from "../redux/todos/thunk/updateStatus";
import updateTodo from "../redux/todos/thunk/updateTodo";

export default function Todo({ todo, allCompleted }) {
    const [editClicked, setEditClicked] = useState(false);
    const [editText, setEditText] = useState('  ');

    const dispatch = useDispatch();

    const { text, id, completed, color } = todo;

    const handleStatusChange = (todoId) => {
        dispatch(updateStatus(todoId, completed));
    };

    const handleColorChange = (todoId, color) => {
        dispatch(updateColor(todoId, color));
    };

    const handleDelete = (todoId) => {
        dispatch(deleteTodo(todoId));
    };

    const handleEditChange = (e) => {
        setEditText(e.target.value);
    }

    const handleEdit = () => {
        setEditClicked(!editClicked);
    };

    const handleUpdate = (e) => {
        e.preventDefault();

        if (editText.length) {
            dispatch(updateTodo(id, editText));
        }
        setEditClicked(false);
    };

    return (
        <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
            <div
                className={`relative rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${completed &&
                    "border-green-500 focus-within:border-green-500"
                    }`}
            >
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => handleStatusChange(id)}
                    className="opacity-0 absolute rounded-full"
                />
                {completed && (
                    <svg
                        className="fill-current w-3 h-3 text-green-500 pointer-events-none"
                        viewBox="0 0 20 20"
                    >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                )}
            </div>
            {
                editClicked ? <form onSubmit={handleUpdate} className={`select-none flex-1 ${completed && "line-through"}`}>
                    <input onChange={handleEditChange} defaultValue={text} type="text" className="w-4/5 px-2 py-1 border-none outline-none bg-gray-100 " />
                </form>
                    :
                    <div className={`select-none flex-1 ${completed && "line-through"}`}>
                        {text}
                    </div>
            }


            {
                allCompleted ?
                    <svg onClick={handleEdit} className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                    :
                    <>
                        <div
                            className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-green-500 border-green-500 ${color === "green" && "bg-green-500"
                                }`}
                            onClick={() => handleColorChange(id, "green")}
                        ></div>

                        <div
                            className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-yellow-500 border-yellow-500 ${color === "yellow" && "bg-yellow-500"
                                }`}
                            onClick={() => handleColorChange(id, "yellow")}
                        ></div>

                        <div
                            className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-red-500 border-red-500 ${color === "red" && "bg-red-500"
                                }`}
                            onClick={() => handleColorChange(id, "red")}
                        ></div>
                    </>
            }


            <img
                src={cancelImage}
                className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                alt="Cancel"
                onClick={() => handleDelete(id)}
            />
        </div>
    );
}
