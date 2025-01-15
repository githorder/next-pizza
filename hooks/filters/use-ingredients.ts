"use client";

import React from "react";
import { Ingredient } from "@prisma/client";

import { Api } from "@/services/api-client";

interface ReturnType {
  ingredients: Pick<Ingredient, "id" | "name">[];
}

export function useIngredients(): ReturnType {
  const [ingredients, setIngredients] = React.useState<
    ReturnType["ingredients"]
  >([]);

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

  return { ingredients };
}
