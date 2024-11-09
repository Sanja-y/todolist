import React from 'react'
import ToDoCard from './ToDoCard'

const ToDoList = (props) => {
    
    const {todo, } = props

    return (
        <div>
            <ul className='main'>
                {
                    todo.map((list, idx) => {
                        return (
                            <ToDoCard {...props} key={idx} idx={idx} >
                                <p>{list}</p>
                            </ToDoCard>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ToDoList
