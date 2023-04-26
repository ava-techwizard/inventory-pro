import { AUTH } from "@/constants/routes";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function requireAuthentication(
  context: NextPageContext,
  callback: any
) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: AUTH,
        permanent: false,
      },
    };
  }

  return callback;
}

export default requireAuthentication;
