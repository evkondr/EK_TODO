import React  from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({todo, index, onChange}) => {
    console.log(todo)
    return(
        <li> <input type="checkbox" onChange={()=>{
            onChange(todo.id)
        }}/> {index+1}. {todo.title}</li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func
}
export default TodoItem