import React, {useState} from "react"
import {v4 as uuid} from "uuid";
import {Button, TextField, Input, IconButton} from "@mui/material";
import {Add} from "@material-ui/icons";

function TodoForm({addTodo}) {
    const [todo, setTodo] = useState({
        id:"",
        title: "",
        completed: false
    })

    function handleTaskInputChange(e) {
        setTodo({...todo, title: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(todo.title.trim) {
            addTodo({...todo, id:uuid()});
            setTodo({...todo, title: ""});
        }
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <Input
                placeholder="Add an Item"
                name="task"
                type="text"
                value={todo.title}
                onChange={handleTaskInputChange}
            />
            <IconButton type="submit"><Add /></IconButton>
        </form>
    );
}

export default TodoForm;