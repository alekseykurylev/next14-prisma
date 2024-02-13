import { fetchFilteredItems } from "@/lib/data";
import Link from "next/link";

export default async function Table({
  query,
  currentPage,
  limit,
}: {
  query: string;
  currentPage: number;
  limit: number;
}) {
  const data = await fetchFilteredItems(query, currentPage, limit);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>type</th>
          <th>№</th>
          <th>name</th>
          <th>placer</th>
          <th>organization</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.registration_number}</td>
            <td>
              <Link href={`/44/${item.id}`}>{item.name}</Link>
            </td>
            <td>{item.placer_full_name}</td>
            <td>{item.specialized_organization_full_name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
