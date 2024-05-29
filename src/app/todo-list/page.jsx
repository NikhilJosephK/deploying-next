import TodoList from "./todo";

async function getData() {
  const result = await fetch("http://localhost:3000/api/todolist-database");
  const data = result.json();
  return data;
}

export default async function TodoListPage() {
  const hai = await getData();
  return (
    <div>
      <TodoList data={hai} />
    </div>
  );
}
