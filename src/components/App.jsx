import React, {useState} from 'react'
import Header from './Header'
import Todolist from './Todolist'
let App = () => {
    let [todos, setTodos] = useState([
        {id: 1, title: 'Buy some food', completed: false},
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
    return(
        <div className='wrap'>
            <Header/>
            <Todolist todos={todos} onTogle={onTogle}/>
        </div>
    )
}
export default App