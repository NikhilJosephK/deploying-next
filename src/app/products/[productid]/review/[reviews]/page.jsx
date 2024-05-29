"use client";

export default function Reviewss({ params }) {
  const randomNumber = () => {
    let num = Math.floor(Math.random() * 2);
    return num;
  };

  if (randomNumber() === 1) {
    throw new Error("this is an error");
  }

  return (
    <div>
      <h1>{params.reviews}</h1>
    </div>
  );
}
