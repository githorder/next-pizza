import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список продуктов */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                products={[
                  {
                    id: 1,
                    name: "Маргарита",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    productItems: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Маргарита",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    productItems: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Маргарита",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    productItems: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Маргарита",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    productItems: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "Маргарита",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    productItems: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />

              <ProductsGroupList
                title="Комбо"
                products={[
                  {
                    id: 1,
                    name: "Маргарита",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    productItems: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Маргарита",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    productItems: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Маргарита",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    productItems: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Маргарита",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    productItems: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "Маргарита",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    productItems: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
