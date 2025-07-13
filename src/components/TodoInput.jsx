export function TodoInput({ completed, id, heading, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        {heading}
      </label>
      <button className="button-2" onClick={() => deleteTodo(id)}>
        Clear
      </button>
    </li>
  )
}
