import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import TodoDataService from "../../api/todo/TodoDataService.js";
import AuthenticationService from "./AuthenticationService.js";

import moment from "moment";

const ListTodosComponent = () => {
    const navigate = useNavigate();
    const [ todos, setTodos ] = useState( [] );
    const [ message, setMessage ] = useState( null );

    const refreshTodos = async () => {
        try {
            let username = AuthenticationService.getLoggedInUserName();
            const response = await TodoDataService.retrieveAllTodos(username)
            setTodos( response.data );
        } catch( error ) {
            alert( error.message );
        }
    };

    useEffect(
        () => {
            refreshTodos();
        },
        []
    );

    const deleteTodoClicked = async id => {
        let username = AuthenticationService.getLoggedInUserName();

        if(!window.confirm( 'Are you sure you want to proceed?' )) {
            return;
        }

        try {
            const response = await TodoDataService.deleteTodo(username, id);
            setMessage( `Delete of todo ${id} Successful` );
            refreshTodos();
        } catch( error ) {
            setMessage( `Something went wrong when deleting todo ${id}` );
            alert( error.message );
        }
        
    }

    const addTodoClicked = () => {
        navigate(`/todos/-1`);
    }

    const updateTodoClicked = id => {
        navigate(`/todos/${id}`);
    };

    return (
        <div>
            <h1>List Of Todo Items</h1>
            <div>***********</div>
            {message && (
                <div class="alert alert-success">{message}</div>
            )}
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Target Date</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo) => (
                            <tr key={todo.id}>
                                <td>{todo.description}</td>
                                <td>
                                    {moment(todo.targetDate).format( "YYYY-MM-DD" )}
                                </td>
                                <td>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => updateTodoClicked(todo.id)}
                                    >
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => deleteTodoClicked(todo.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="row">
                    <button
                        className="btn btn-success"
                        onClick={addTodoClicked}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ListTodosComponent;
