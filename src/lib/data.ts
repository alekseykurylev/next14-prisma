import { unstable_noStore as noStore } from "next/cache";
import { db } from "@/lib/db";

export async function getItem(id: number) {
  try {
    const data = await db.catalog_procedure.findFirst({
      select: {
        name: true,
        registration_number: true,
        catalog_procedure_status: {
          select: {
            name: true,
          },
        },
        catalog_procedure_lot: {
          select: {
            contract_start_price: true,
          },
        },
      },
      where: { id },
    });
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function fetchFilteredItems(
  query: string,
  currentPage: number,
  limit: number
) {
  noStore();

  try {
    const data = await db.catalog_procedure.findMany({
      select: {
        id: true,
        type: true,
        name: true,
        registration_number: true,
        placer_full_name: true,
        specialized_organization_full_name: true,
        catalog_procedure_status: {
          select: {
            name: true,
          },
        },
        catalog_procedure_lot: {
          select: {
            contract_start_price: true,
          },
        },
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
      skip: currentPage && (currentPage - 1) * limit,
      take: limit,
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

    return count;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}
