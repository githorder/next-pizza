import { Product } from "@prisma/client";

import { ApiRoutes } from "./api-routes";
import { http } from "./http";

export async function search(query: string): Promise<Product[]> {
  return (
    await http.get<Product[]>(ApiRoutes.PRODUCTS_SEARCH, { params: { query } })
  ).data;
}
