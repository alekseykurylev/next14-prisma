"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Limit() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = (term: any) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", "1");

    if (term) {
      params.set("limit", term);
    } else {
      params.delete("limit");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <select
        name="limit"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("limit")?.toString()}
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  );
}
