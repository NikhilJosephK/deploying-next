import Link from "next/link";

export default function BlogHome() {
  return (
    <div>
      <Link href="/blog/blog-one">Blog One</Link>
      <Link href="/blog/blog-two">Blog Two</Link>
      <Link href="/blog/blog-three">Blog Three</Link>
    </div>
  );
}
