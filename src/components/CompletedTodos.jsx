import React from 'react';
import tick from '../assets/images/double-tick.png'
import Todo from './Todo';
import { useSelector } from 'react-redux';

const CompletedTodos = () => {
    const todos = useSelector(state => state.todos);

    return (
        <div className="grid place-items-center bg-blue-100 py-5 px-6 font-sans">


            <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                {/* <!-- header --> */}
                <div>
                    <ul className="flex justify-between my-4 text-xs text-gray-500">
                        <li className="flex space-x-1 cursor-pointer">
                            <img
                                className="w-4 h-4"
                                src={tick}
                                alt="Complete"
                            />
                            <span>Completed Tasks</span>
                        </li>
                    </ul>
                </div>

                <hr className="mt-4" />

                {/* <!-- todo list --> */}
                <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
                    {
                        todos.filter(todo => todo.completed).map(todo => <Todo key={todo.id} todo={todo} allCompleted />)
                    }
                </div>

                <hr className="mt-4" />

            </div>
        </div>
    );
};

export default CompletedTodos;