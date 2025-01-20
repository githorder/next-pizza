import { prisma } from "@/prisma/prisma-client";

import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: { products: { include: { ingredients: true, items: true } } },
  });

  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar categories={categories} />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список продуктов */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.length > 0
                ? categories.map((category) => {
                    return (
                      <ProductsGroupList
                        key={category.id}
                        title={category.name}
                        products={category.products}
                        categoryId={category.id}
                      />
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
