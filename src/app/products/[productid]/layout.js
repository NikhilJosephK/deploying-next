// export function generateMetadata({ params }) {
//   return {
//     title: params.productid,
//     description: params.productid,
//   };
// }

export default function ProductLayout({ children }) {
  return (
    <>
      {children}
      <h2>Featured Products Carousel</h2>
    </>
  );
}
f;
