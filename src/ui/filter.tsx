"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter({
  name,
  values,
  defaultValue,
}: {
  name: string;
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
      params.set(name, term);
    } else {
      params.delete(name);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <select
        name={name}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={
          searchParams.get(name)
            ? searchParams.get(name)?.toString()
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
