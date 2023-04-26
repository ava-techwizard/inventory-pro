import { REQUEST_METHOD } from "@/constants/endpoints";
import serverAuth from "@/lib/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== REQUEST_METHOD.GET) {
    return res.status(405).end();
  }

  try {
    const { currentUser } = await serverAuth(req);
    return res.status(200).json(currentUser);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return res.status(400).end();
  }
}
