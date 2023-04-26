import { REQUEST_METHOD } from "@/constants/endpoints";
import prismadb from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== REQUEST_METHOD.POST) {
    return res.status(405).end();
  }
  try {
    const { email, name, password } = req.body;
    const existingUser = await prismadb.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(422).json({ error: "Email taken" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });
    return res.status(200).json(user);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return res.status(400).end();
  }
}
