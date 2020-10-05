import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

//custom hook
function useInput(defaultValue=''){
    const [value, setValue] = useState(defaultValue)

    return {
        value,
        onChange: event => setValue(event.target.value),
        clear: () => setValue('') 
    }
}
function AddTodo(){
    const input = useInput('')
    const {onSubmit} = useContext(Context)
    const submitHandler = (event) => {
        event.preventDefault()
        if(input.value.length){
            onSubmit(input.value)
            input.clear()
        }
    }
    return(
        <div className='addtodo-form'>
            <form action="" onSubmit={submitHandler}>
                <input type="text" placeholder='type a todo' {...input}/>
                <button type='submit'>Add</button>
            </form>
        </div>
        
    )
}

export default AddTodo;