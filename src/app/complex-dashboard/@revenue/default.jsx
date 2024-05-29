import Link from "next/link";

export default function DefaultRevenue() {
  return (
    <div>
      <h1>Revenue</h1>
      <Link href="complex-dashboard/revenue-archive">
        go to revenue archive
      </Link>
    </div>
  );
}
