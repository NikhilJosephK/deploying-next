"use client";

export default function ErrorBoundary({ error, reset }) {
  const resetButton = () => {
    return reset();
  };
  return (
    <div>
      {/* <h1>This is an error</h1> */}
      <h1>{error.message}</h1>
      <button onClick={resetButton}>Try Again</button>
    </div>
  );
}
