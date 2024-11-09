import React, { useState } from 'react'

const ToDoInput = (props) => {
    const { handleAddToDo , todoValue , setToDoValue } = props

    return (
        <header>
            <input placeholder='Enter item...' 
            value={todoValue}
            onChange={(e)=> {
                console.log("hi")
                setToDoValue(e.target.value)
            }}/>
            <button onClick={()=>{handleAddToDo(todoValue)}}> Add </button>
        </header>
    )
}

export default ToDoInput
