import React  from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const Todolist = ({todos, onTogle}) => {
    return(
        <section>
            <div className='todo_list'>
                <div className="container">
                    <div className='todo_list-items'>
                        <ul>
                            {todos.map((todo, index)=><TodoItem key={todo.id} todo={todo} index={index} onChange={onTogle}/>)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        
    )
}
Todolist.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onTogle: PropTypes.func
}
export default Todolist