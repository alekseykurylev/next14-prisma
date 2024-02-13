"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = (term: string) => {
    console.log(`Searching... ${term}`);
  };

  return (
    <div>
      <input
        placeholder="Search"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
