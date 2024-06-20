"use client";

import { useEffect, useState } from "react";
// import { Child } from "./child";

export default function TodoList({ data }) {
  //   console.log(data);
  const [fake, setFake] = useState([...data]);
  const [items, setItem] = useState("");
  const [fetchData, setFetchData] = useState(0);
  // const [counter, setCounter] = useState(0);
  //   console.log(fake);

  useEffect(() => {
    const fetching = async () => {
      const data = await fetch("http://localhost:3000/api/todolist-database");
      const res = await data.json();
      // console.log(res);
      // return data;
      setFake(res);
    };
    fetching();
    // console.log(fetchData);
    // .then((item) => {
    //   console.log(item.json());
    // });
  }, [fetchData]);

  async function addItem(e) {
    // setFake((prev) => {
    //   return [...prev, e.target.children[0].value];
    // });

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
      setFetchData((prev) => prev + 1);
    }

    // console.log(fake);
  }

  return (
    <div className="h-[89svh] grid place-items-center">
      {/* <Child data={setCounter} /> */}
      <div>
        {/* <p>{counter}</p> */}

        <form action="" onSubmit={addItem}>
          <input
            className="text-[black]"
            type="text"
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />
          <button type="submit">submit</button>
        </form>
        {fake?.map((item) => {
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
