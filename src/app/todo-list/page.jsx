import TodoList from "./todo";
import { cookies } from "next/headers";

async function getData() {
  const result = await fetch("http://localhost:3000/api/todolist-database");
  const data = result.json();
  return data;
}

const getCookie = async (name) => {
  const cookieStore = cookies();
  const cookie = cookieStore.get(name);
  return cookie;
};

export default async function TodoListPage() {
  const cookie = await getCookie("hello");

  console.log(cookie);
  const hai = await getData();

  if (cookie?.name === "hello") {
    return (
      <div>
        <TodoList data={hai} />
      </div>
    );
  }
  return <div>not found</div>;
}
