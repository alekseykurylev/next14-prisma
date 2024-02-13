import Link from "next/link";
import Search from "@/ui/search";
import Table from "@/ui/table";
import { Suspense } from "react";

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

  // const data = await getItems();

  return (
    <div>
      <div style={{ display: "flex", gap: 10 }}>
        <div>
          <Link href="/">Главная</Link>
        </div>
        <div>/</div>
        <div>44</div>
      </div>

      <h1>44</h1>
      <Search placeholder="Search" />
      <Suspense key={query + currentPage} fallback="Loading">
        <Table query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
}
