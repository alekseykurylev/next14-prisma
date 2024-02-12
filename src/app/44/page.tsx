import Link from "next/link";
import { getItems } from "@/lib/data";

export default async function Page() {
  const data = await getItems();

  return (
    <>
      <Link href="/">Back</Link>
      <h1>44</h1>
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
