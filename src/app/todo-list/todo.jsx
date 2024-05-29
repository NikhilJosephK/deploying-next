"use client";

import { useEffect, useState } from "react";

export default function TodoList({ data }) {
  //   console.log(data);
  const [fake, setFake] = useState([...data]);
  const [items, setItem] = useState("");
  //   console.log(fake);

  async function addItem(e) {
    // setFake((prev) => {
    //   return [...prev, e.target.children[0].value];
    // });
    console.log(fake);
    e.preventDefault();
    if (e.target.children[0].value != "") {
      const response = await fetch(
        "http://localhost:3000/api/todolist-database",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ items }),
        }
      );

      if (response.ok) {
        console.log("Data inserted successfully!");
      } else {
        console.error("Failed to insert data.");
      }
      e.target.children[0].value = "";
    }
  }

  return (
    <div className="h-[89svh] grid place-items-center">
      <div>
        <form action="" onSubmit={addItem}>
          <input
            className="text-[black]"
            type="text"
            onChange={(e) => setItem(e.target.value)}
          />
          <button type="submit">submit</button>
        </form>
        {fake.map((item) => {
          return (
            <div key={item.id} className="text-white">
              {item.item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
