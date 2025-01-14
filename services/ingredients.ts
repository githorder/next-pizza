import { Ingredient } from "@prisma/client";

import { ApiRoutes } from "./api-routes";
import { http } from "./http";

export async function getAll(): Promise<Ingredient[]> {
  return (await http.get(ApiRoutes.INGREDIENTS)).data;
}
