import prisma from "@/lib/prisma";

export default async function Home() {
  const data = await prisma.catalog_procedure.findFirst({
    include: {
      catalog_procedure_status: true,
    },
    where: { name: "Тест ЭК" },
  });

  console.log(data);
  return <div>{JSON.stringify(data)}</div>;
}
