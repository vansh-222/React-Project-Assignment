import { TodoInput } from "./TodoInput"

export function TodoList({todoList, toggleTodo, deleteTodo}) {
    return (
    <ul className="todo-list">
       {todoList.length === 0 && <p className="empty">No todos yet!</p>}
        {todoList.map(todo => {
          return(
          <TodoInput 
            {...todo} 
             key= {todo.id}
             toggleTodo={toggleTodo} 
             deleteTodo={deleteTodo}
             />
          )
        })}
      </ul>
    )
  }
