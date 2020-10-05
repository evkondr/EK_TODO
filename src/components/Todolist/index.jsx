import React  from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import AddTodo from '../AddTodo'

const Todolist = ({todos, onTogle}) => {
    return(
        <section>
            <div className='todo_list'>
                <div className="container column">
                    <AddTodo />
                    <div className='todo_list-items'>
                        {todos.length ? <ul>
                            {todos.map((todo, index)=><TodoItem key={todo.id} todo={todo} index={index} onChange={onTogle}/>)}
                        </ul>: <p>No todos</p>}
                        
                    </div>
                </div>
            </div>
        </section>
        
    )
}
Todolist.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onTogle: PropTypes.func.isRequired
}
export default Todolist