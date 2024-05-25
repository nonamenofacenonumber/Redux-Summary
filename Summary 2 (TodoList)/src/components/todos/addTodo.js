import { useState } from "react";
import { addTodo } from "../../store/slices/todosSlice";
import { useDispatch } from "react-redux";
import axios from "axios";


export default function AddTodo() {
    const dispatch = useDispatch();
    const [inputTodo , setInputTodo] = useState("");

    const inputTodoHandler = (e) => setInputTodo(e.target.value)

    const addTodoHandler = async () => {
        if(inputTodo.length > 0) {

            try {
                let res = await axios.post("https://628b2fc5280122de359cf6e0.endapi.io/todos" , {
                    text : inputTodo,
                    done : false
                })
                
                dispatch(addTodo(res.data));
                setInputTodo("");
            } catch (e) {
                console.log(e);
            }
           

        }
    }

    return (
        <div className="flex mt-4">
            <input 
                onChange={inputTodoHandler} 
                value={inputTodo}
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-800" placeholder="Add Todo" />
            <button onClick={addTodoHandler} className="p-2 border-2 rounded text-teal-500 border-teal-500  hover:text-white hover:bg-teal-500">Add</button>
        </div>
    )
}