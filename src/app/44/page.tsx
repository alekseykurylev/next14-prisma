import Link from "next/link";
import { getItems } from "@/lib/data";
import Search from "@/ui/search";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const data = await getItems();

  return (
    <>
      <Link href="/">Back</Link>
      <h1>44</h1>
      <Search />
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link href={`/44/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
