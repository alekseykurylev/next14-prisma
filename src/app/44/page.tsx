import Link from "next/link";
import Search from "@/ui/search";
import Table from "@/ui/table";
import { Suspense } from "react";
import { fetchItemsPages } from "@/lib/data";
import Pagination from "@/ui/pagination";
import Limit from "@/ui/limit";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    limit?: string;
  };
}) {
  const defaultLimit = 10;

  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || defaultLimit;

  const count = await fetchItemsPages(query);

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
      <div
        style={{ display: "flex", gap: 10, justifyContent: "space-between" }}
      >
        <Search placeholder="Search" />
        <div>Всего: {count}</div>
      </div>

      <Suspense key={query + currentPage} fallback="Loading">
        <Table query={query} currentPage={currentPage} limit={limit} />
      </Suspense>
      <div style={{ display: "flex", gap: 10, justifyContent: "right" }}>
        <Limit values={[10, 25, 50, 100]} defaultValue={defaultLimit} />
        <Pagination count={count} limit={limit} />
        <div>Всего: {count}</div>
      </div>
    </div>
  );
}
