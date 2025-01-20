import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

import { ChooseProductModal } from "@/components/shared";

interface Props {
  params: { id: string };
}

export default async function ProductModal({ params: { id } }: Props) {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
      },
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return <ChooseProductModal product={product} />;
}
