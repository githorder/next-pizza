import React from "react";
import { useSet } from "react-use";
import { Ingredient } from "@prisma/client";

import { Api } from "@/services/api-client";

interface ReturnType {
  ingredients: Pick<Ingredient, "id" | "name">[];
  toggle: (id: string) => void;
  selectedIds: Set<string>;
}

export function useFilterIngredients(): ReturnType {
  const [ingredients, setIngredients] = React.useState<
    ReturnType["ingredients"]
  >([]);

  const [selectedIds, { toggle }] = useSet<string>(new Set());

  React.useEffect(() => {
    async function fetchIngredients() {
      try {
        const ingredients = await Api.ingredients.getAll();
        setIngredients(ingredients);
      } catch (error) {
        console.error(error);
      }
    }

    fetchIngredients();
  }, []);

  return { ingredients, toggle, selectedIds };
}
