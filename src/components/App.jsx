import React, {useState, useEffect} from 'react'
import Header from './Header'
import Todolist from './Todolist'
import Context from '../context'

let App = () => {
    let [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => setTodos(todos))
    },[])

    const onTogle = (id) =>{
        setTodos(todos.map(todo=>{
            if(todo.id == id){
                todo.completed = !todo.completed
            }
            return todo
        }))
    }
    const removeTodo = (id) =>{
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const onSubmit = (title) =>{
        setTodos(todos.concat([{id: Date.now(), title: title, completed: false}]))
    }
    return(
        <Context.Provider value={{removeTodo, onSubmit}}>
            <div className='wrap'>
                <Header/>
                <Todolist todos={todos} onTogle={onTogle}/>
                
            </div>
        </Context.Provider>
    )
}
export default App