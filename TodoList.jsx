import { TodoItem } from "./TodoItem"

export function TodoList ({ todos, toggleTodo, deleteTodo }){
  return(

<ul className="List">
  {todos.length === 0 && "No Todos Hurray!!"}
            
   {todos.map(todo => {
  return ( 
  <TodoItem  
  id={todo.id} 
  completed={todo.completed} 
  title={todo.title}
  key={todo.id} 
  toggleTodo={toggleTodo} 
  deleteTodo={deleteTodo}
  />
              
 )
})}
</ul>
              
  )
 }

