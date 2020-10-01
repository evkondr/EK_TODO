import React, {useState} from 'react'
import Header from './Header'
import Todolist from './Todolist'
import Context from '../context'

let App = () => {
    let [todos, setTodos] = useState([
        {id: 1, title: 'Buy some food', completed: true},
        {id: 2, title: 'Read book', completed: false},
        {id: 3, title: 'Clean house', completed: false}
    ])
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