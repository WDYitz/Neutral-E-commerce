import { db } from "@/lib/prisma";
import { Category, Product } from "@prisma/client";

interface ProductsWithCategoriesType {
  products: Product[] & Pick<Category, 'id' | 'name'>[];
}

export const getProductsWithCategories = async ({ take }: { take?: number }): Promise<ProductsWithCategoriesType> => {
  try {
    const products = await db.product.findMany({
      where: {
        discountPercentage: {
          gt: 0
        }
      },
      take,
      include: {
        category: {
          select: {
            id: true,
            name: true,
          }
        }
      }
    })
    return { products };
  } catch (e) {
    console.error(e);
    return { products: [] };
  }
}