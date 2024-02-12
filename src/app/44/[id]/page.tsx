import Link from "next/link";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { getItem } from "@/lib/data";

export default async function Page({ params }: { params: { id: number } }) {
  const data = await getItem(Number(params.id));

  if (!data) notFound();

  console.log(data);

  return (
    <>
      <Link href="/44">Back</Link>
      <h1>{data?.name}</h1>
    </>
  );
}
