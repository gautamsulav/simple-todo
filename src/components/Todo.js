import React from "react"
import { Checkbox, IconButton, Typography } from "@mui/material";
import {Close} from "@material-ui/icons";


function Todo({todo, toggleComplete, removeTodo}){

   function handleCheckboxClick() {
       toggleComplete(todo.id)
   }

   function handleRemoveClick() {
       removeTodo(todo.id);
   }

   return  (
       <div className="todo">
           <Checkbox
               checked={todo.completed}
               type="checkbox" onClick={handleCheckboxClick}/>
           <Typography
               variant="h6"
               style={{
                   textDecoration: todo.completed ? "line-through" : null,
           }}>
               {todo.title}
           </Typography>
           <IconButton onClick={handleRemoveClick}><Close /></IconButton>
       </div>
   );
}

export default Todo;