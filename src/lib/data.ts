import { unstable_noStore as noStore } from "next/cache";
import { db } from "@/lib/db";

export async function getItems() {
  noStore();
  try {
    const data = await db.catalog_procedure.findMany({
      take: 10,
    });
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function getItem(id: number) {
  try {
    const data = await db.catalog_procedure.findFirst({
      include: {
        catalog_procedure_status: true,
      },
      where: { id: id },
    });
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}
