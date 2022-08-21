import { todoUpdated } from "../actions";

const updateTodo = (todoId, text) => {
    return async (dispatch) => {
        await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: "PATCH",
            body: JSON.stringify({
                text
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });

        dispatch(todoUpdated(todoId, text));
    };
};

export default updateTodo;