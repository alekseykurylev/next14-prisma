import { unstable_noStore as noStore } from "next/cache";
import { db } from "@/lib/db";

export async function getItem(id: number) {
  try {
    const data = await db.catalog_procedure.findFirst({
      include: {
        catalog_procedure_status: true,
      },
      where: { id },
    });
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function fetchFilteredItems(query: string, currentPage?: number) {
  noStore();

  try {
    const data = await db.catalog_procedure.findMany({
      select: {
        id: true,
        name: true,
        registration_number: true,
        placer_full_name: true,
        specialized_organization_full_name: true,
      },
      where: {
        OR: [
          {
            name: {
              contains: query,
            },
          },
          {
            placer_full_name: {
              contains: query,
            },
          },
          {
            registration_number: {
              contains: query,
            },
          },
        ],
      },
      skip: currentPage && (currentPage - 1) * 10,
      take: 10,
    });
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function fetchItemsPages(query: string) {
  noStore();

  try {
    const count = await db.catalog_procedure.count({
      where: {
        OR: [
          {
            name: {
              contains: query,
            },
          },
          {
            placer_full_name: {
              contains: query,
            },
          },
          {
            registration_number: {
              contains: query,
            },
          },
        ],
      },
    });
    const totalPages = Math.ceil(count / 10);
    return { count, totalPages };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}
