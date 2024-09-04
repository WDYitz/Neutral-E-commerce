import ProductCard from "@/components/product-card";
import { Category, Product } from "@prisma/client";

interface RelatedProductsProps {
  relatedProducts: Product[];
  paramsId: string;
  category: Pick<Category, "id" | "name">;
}

const RelatedProducts = ({
  category,
  paramsId,
  relatedProducts,
}: RelatedProductsProps) => {
  return (
    <div className="flex flex-col space-y-2 pt-6">
      <span className="uppercase font-semibold">produtos relacionados</span>
      <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden gap-4">
        {relatedProducts.map(
          (product) =>
            product.id !== paramsId && (
              <ProductCard
                product={product}
                key={product.id}
                category={category}
              />
            )
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;