import { useLottie } from "lottie-react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import loginAnimation1 from "../animations/login-animation-2.json";

function Login({ query }: { query: { callback: string } }) {
  const router = useRouter();
  const session = useSession();
  const options = {
    animationData: loginAnimation1,
    loop: true,
  };

  const { View } = useLottie(options);

  useEffect(() => {
    if (session?.data?.user) {
      router.push(query?.callback);
    } else {
      signIn("auth0", { callbackUrl: query?.callback });
    }
  }, [router, session, query]);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="w-1/3 flex-row justify-center">{View}</div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { query } = context;
  return {
    props: { query },
  };
}

export default Login;
