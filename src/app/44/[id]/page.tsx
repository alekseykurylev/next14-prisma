import Link from "next/link";
import { notFound } from "next/navigation";
import { getItem } from "@/lib/data";

export default async function Page({ params }: { params: { id: number } }) {
  const data = await getItem(Number(params.id));

  if (!data) notFound();

  return (
    <div>
      <div style={{ display: "flex", gap: 10 }}>
        <div>
          <Link href="/">Главная</Link>
        </div>
        <div>/</div>
        <div>
          <Link href="/44">Catalog 44</Link>
        </div>
        <div>/</div>
        <div>{data.registration_number}</div>
      </div>

      <h1>Сведения о закупке №{data.registration_number}</h1>
      <p>{data.name}</p>
      <p>{data.catalog_procedure_status.name}</p>
      <p>{data.catalog_procedure_lot[0].contract_start_price}</p>
    </div>
  );
}
