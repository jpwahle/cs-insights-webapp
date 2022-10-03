import { getSession, GetSessionParams } from "next-auth/react";

export const requireAuth = async (
  context: GetSessionParams,
  callback: () => void
) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login?callback=/dashboard",
        permanent: true,
      },
    };
  }
  return callback();
};
