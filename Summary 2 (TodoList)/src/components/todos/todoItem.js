
import { deleteTodo , toggleDoneTodo , editTodo } from "../../store/slices/todosSlice"
import { useDispatch } from "react-redux";
import axios from "axios";

export default function TodoItem({ todo }) {
    const dispatch = useDispatch();

    const todoDeleteHandler = async () => {
        try {
            let res = await axios.delete(`https://628b2fc5280122de359cf6e0.endapi.io/todos/${todo.id}`)
            dispatch(deleteTodo(todo.id))
        } catch (e) {
            console.log(e)
        }
    }

    const toggleDoneTodoHandler = async () => {
        let res = await axios.put(`https://628b2fc5280122de359cf6e0.endapi.io/todos/${todo.id}` , {
            ...todo,
            done : ! todo.done
        })
        dispatch(toggleDoneTodo({  id : todo.id }))
        // dispatch(editTodo({ id : todo.id , text : 'new text'}))
    }

    return (
        <div className="flex mb-4 items-center">
            <p className={`mr-auto ${todo.done ? 'line-through text-green-600' : 'text-gray-700'}`}>{todo.text}</p>

            {
                todo.done 
                    ?  <button onClick={toggleDoneTodoHandler} className="p-1 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-400 border-gray-400 hover:bg-gray-400">Not Done</button>
                    :  <button onClick={toggleDoneTodoHandler} className="p-1 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-600 border-green-600 hover:bg-green-600">Done</button>
            }
            <button onClick={todoDeleteHandler} className="p-1 px-2 ml-2 border-2 rounded text-red-600 border-red-600 hover:text-white hover:bg-red-600">Remove</button>
        </div>
    )
}