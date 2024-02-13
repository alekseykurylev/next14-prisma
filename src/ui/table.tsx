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
          <th>number</th>
          <th>name</th>
          <th>price</th>
          <th>placer</th>
          <th>organization</th>
          <th>status</th>
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
            <td>{item.catalog_procedure_lot[0].contract_start_price} RUB</td>
            <td>{item.placer_full_name}</td>
            <td>{item.specialized_organization_full_name}</td>
            <td>{item.catalog_procedure_status.name}</td>
          </tr>
        ))}
        {data.length === 0 && (
          <tr>
            <td colSpan={9999} align="center">
              Данных не найдено
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
