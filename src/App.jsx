import { useState, useEffect } from "react"
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"
// import '../index.css'
function App() {
  const [todo, setTodo] = useState([])
  const [todoValue, setToDoValue] = useState('')

  const persistData = (newList) => {
    localStorage.setItem('todo', JSON.stringify({
      todo: newList
    }))
  }

  const AddToDo = (newItem) => {
    const newTodo = [...todo, newItem]
    persistData( newTodo )
    setTodo(newTodo)
  }
  const handleDelete = (index) => {
    const deletedItem = todo.filter((item, idx) => {
      return idx !== index;
    })
    persistData( deletedItem )

    setTodo(deletedItem)

  }

  const handleEdit = (index) => {
    const valueToBeEdited = todo[index]
    persistData(valueToBeEdited)
    setToDoValue(valueToBeEdited)
    handleDelete(index)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }
    let localTodos = localStorage.getItem('todo');
    if (!localTodos) {
      return
    }
    localTodos =  JSON.parse(localTodos).todo;
    setTodo(localTodos)
  },[])

  return (
    <>
      <ToDoInput handleAddToDo={AddToDo} todoValue={todoValue} setToDoValue={setToDoValue} />
      <ToDoList todo={todo} handleDelete={handleDelete} handleEdit={handleEdit} />
    </>
  )
}

export default App
