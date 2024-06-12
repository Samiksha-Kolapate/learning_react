import { useState } from "react";
import TodoChild from "./TodoChild";

function TodoParent(){

    var [tasks, setTasks] = useState("");

    return (
        <div
        style={{display:"flex", flexDirection:"column" , alignItems: "center"}}>
        <h1>ToDo</h1>
        
        <div>
            <input placeholder="Enter task" />
            <button>Add task</button>
        </div>
        <TodoChild />
        </div>
    )
}

export default TodoParent;