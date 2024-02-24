import axios from 'axios'
import { JPA_API_URL } from '../../Constants'

const TodoDataService = {
    retrieveAllTodos(name) {
        return axios.get(`${JPA_API_URL}/users/${name}/todos`);
    },
    retrieveTodo(name, id) {
        return axios.get(`${JPA_API_URL}/users/${name}/todos/${id}`);
    },
    deleteTodo(name, id) {
        return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`);
    },
    updateTodo(name, id, todo) {
        return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`, todo);
    },
    createTodo(name, todo) {
        return axios.post(`${JPA_API_URL}/users/${name}/todos/`, todo);
    }
}

export default TodoDataService;