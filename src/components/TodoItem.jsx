import { useState } from "react"

export function TodoItem({ onSubmit }) {
  const [todoIteam, setTodos] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (todoIteam === "") return

    onSubmit(todoIteam)
    setTodos("")
  }

  return (
    <form onSubmit={handleSubmit} className="first-form">
      <div className="first-container">
        <label htmlFor="todo">Todo Items</label>
        <input
          type="text"
          placeholder="Add items..."
          id="todo"
          value={todoIteam}
          onChange={e => setTodos(e.target.value)}
        />
      </div>
      <button className="button">Add</button>
    </form>
  )
}
