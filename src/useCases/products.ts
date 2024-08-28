import { ProductsData, ProductType } from "@/data/products-data";
import { UUID } from "crypto";

class ProductUseCase {
  private productRepositoryData: ProductType[];

  constructor() {
    this.productRepositoryData = ProductsData;
  }

  getProductById = (id: UUID): ProductType => {
    return this.productRepositoryData.filter((prod) => prod.id === id)[0];
  }

  getProductsByCategory = (name: string): ProductType[] => {
    return this.productRepositoryData.filter((prod) => prod.category === name);
  }
}

// The '[0]' at the end of the 'getProductById' method is to return the first element of the array, since the filter method returns an array of elements that match the condition. In this case, we are assuming that the id and category are unique, so we can safely return the first element of the array.

export const productUseCase = new ProductUseCase();