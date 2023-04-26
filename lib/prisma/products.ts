import { ProductDetails } from "@/pages/products/create";
import client from ".";

export const getProducts = async () => {
  try {
    const products = await client.product.findMany();
    return { products };
  } catch (error) {
    return { error };
  }
};

export const getProductById = async (id: string) => {
  try {
    const product = await client.product.findUnique({ where: { id } });
    return { product };
  } catch (error) {
    return { error };
  }
};

export const createProduct = async (product: ProductDetails) => {
  try {
    const productFromDB = await client.product.create({ data: product });
    return { product: productFromDB };
  } catch (error) {
    return { error };
  }
};
