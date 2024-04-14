export default function Docs({ params }) {
  if (params.slug?.length === 2) {
    return (
      <div>
        <h1>{params.slug[1]} : second slug</h1>
      </div>
    );
  } else if (params.slug?.length === 1) {
    return (
      <div>
        <h1>{params.slug[0]} : first slug</h1>
      </div>
    );
  } else if (params?.slug?.length >= 2) {
    return (
      <div>
        <h1>More that two slugs</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>there are no slugs</h1>
      </div>
    );
  }
}
