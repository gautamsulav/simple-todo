import React, {useState, useEffect} from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {Typography} from "@mui/material";
import "./App.css";

const LOCAL_STORAGE_KEY = 'react-todo-list-todos'

function App() {

  const[todos, setTodos] = useState([]);

    function addTodo(todo) {
        if(todo.title == '' || todo.title == null) {
            alert('Cannot Add Empty Todo');
            return;
        }
        setTodos([todo, ...todos]);
    }

    useEffect(()=>{
        const storageTodos= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if(storageTodos) {
            setTodos(storageTodos);
            console.log(storageTodos);
        }
    },[])

    useEffect(() =>{
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos]);

    function toggleComplete(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                    return todo;
                }
                return todo;
            })
        );
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }


    return (
        <div class="App">
            <section className="heading">
                This is your Todos
            </section>
            {/*<Typography variant="h1"  style={{padding: 16, textAlign: "center"}}>*/}
            {/*    Todos*/}
            {/*</Typography>*/}

            <div className="content">
                <TodoForm addTodo={addTodo} />
                <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
            </div>
        </div>
    );
}

export default App;
