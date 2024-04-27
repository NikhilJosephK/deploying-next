export function generateMetadata({ params }) {
  return {
    title: params.productid,
    description: params.productid,
  };
}

export default function ProductId({ params }) {
  return (
    <div>
      <h1>{params.productid}</h1>
    </div>
  );
}
