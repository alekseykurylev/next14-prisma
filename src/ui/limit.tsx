"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Limit({
  values,
  defaultValue,
}: {
  values: number[];
  defaultValue: number;
}) {
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
        defaultValue={
          searchParams.get("limit")
            ? searchParams.get("limit")?.toString()
            : defaultValue
        }
      >
        {values.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
