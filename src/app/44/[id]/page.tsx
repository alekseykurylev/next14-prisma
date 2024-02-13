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
          <Link href="/44">44</Link>
        </div>
        <div>/</div>
        <div>{data?.name}</div>
      </div>

      <h1>{data?.name}</h1>
    </div>
  );
}
