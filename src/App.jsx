import { useEffect, useState } from "react"
import "./style.css"
import { TodoItem } from "./components/TodoItem"
import { TodoList } from "./components/TodoList"

export default function App() {
  const [todoList, setTodoList] = useState(() => {
    const localvalue = localStorage.getItem("todos")
    if (localvalue == null) return []
    return JSON.parse(localvalue)
  })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList))
  }, [todoList])

  function addTodo(title) {
    setTodoList(currTodos => {
      return [
        ...currTodos,
        { id: crypto.randomUUID(), heading: title, completed: false },
      ]
    })
  }

  function toggleTodo(id) {
    setTodoList(currTodos => {
      return currTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodoList(currTodos => {
      return currTodos.filter(todo => todo.id !== id)
    })
  }

 return (
  <div className="container">
    <TodoItem onSubmit={addTodo} />
    <h2 className="header">Todo List</h2>
    <TodoList todoList={todoList} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
  </div>
)
}
