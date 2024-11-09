import React from 'react'

function ToDoCard(props) {
    const { children, handleDelete, handleEdit, idx } = props
    return (
        <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
                <button onClick={() => { handleEdit(idx)} }>
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={() => { handleDelete(idx) }}>
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        </li>
    )
}

export default ToDoCard
