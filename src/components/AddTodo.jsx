import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

function AddTodo(){
    const [value, setValue] = useState('')
    const {onSubmit} = useContext(Context)
    const submitHandler = (event) => {
        event.preventDefault()
        if(value.length){
            onSubmit(value)
            setValue('')
        }
    }
    return(
        <form action="" onSubmit={submitHandler}>
            <input type="text" placeholder='type a todo' value={value} onChange={(event)=>{setValue(event.target.value)}}/>
            <button type='submit'>Add</button>
        </form>
    )
}

export default AddTodo;