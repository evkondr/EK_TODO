import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../../context'

const TodoItem = ({todo, index, onChange}) => {
    let classes = []
    if(todo.completed){
        classes.push('done')
    }
    const {removeTodo} = useContext(Context)
    return(
        <li className={classes.join(' ')}> <span><input type="checkbox" checked={todo.completed} onChange={()=>{
            onChange(todo.id)
        }}/> {index+1}. {todo.title}</span>
        <button onClick={()=>{removeTodo(todo.id)}}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func
}
export default TodoItem