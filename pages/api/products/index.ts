import { REQUEST_METHOD } from "@/constants/endpoints";
import { createProduct, getProducts } from "@/lib/prisma/products";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === REQUEST_METHOD.GET) {
    try {
      const { products, error } = await getProducts();
      if (error) {
        throw new Error(String(error));
      }
      return res.status(200).json({ products });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
  if (req.method === REQUEST_METHOD.POST) {
    try {
      const data = req.body;
      const { product, error } = await createProduct(data);
      if (error) throw new Error(String(error));
      return res.status(200).json({ product });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  res.setHeader("Allow", [REQUEST_METHOD.GET, REQUEST_METHOD.POST]);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;
