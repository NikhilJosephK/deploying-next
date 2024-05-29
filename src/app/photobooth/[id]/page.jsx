export default function Id({ params }) {
  const arr = ["hello", "there", "world"];

  return (
    <div>
      {arr.find((item) => {
        return item === params.id;
      })}
    </div>
  );
}
