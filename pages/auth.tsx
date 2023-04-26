import axios from "axios";
import { useCallback, useState } from "react";
import { getSession, signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { layout } from "@/styles/style";
import Input from "@/components/Input";
import { AuthState, FieldType, fields } from "@/constants/authFields";
import { HOME } from "@/constants/routes";
import { NextPageContext } from "next";
import { ENDPOINT } from "@/constants/endpoints";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: HOME,
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

const Auth = () => {
  const [credentials, setCredentials] = useState<{
    name: string;
    email: string;
    password: string;
    [key: string]: string;
  }>({
    name: "",
    email: "",
    password: "",
  });

  const [authState, setAuthState] = useState(AuthState.SIGN_IN);

  const login = async () => {
    try {
      await signIn("credentials", {
        email: credentials.email,
        password: credentials.password,
        callbackUrl: HOME,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const register = async () => {
    try {
      await axios.post(ENDPOINT.REGISTER, { ...credentials });
      login();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const credentialsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.id;
    const value = e.target.value;

    setCredentials({ ...credentials, [name]: value });
  };
  const toggleAuthState = useCallback(() => {
    setAuthState((prevAuthState) =>
      prevAuthState === AuthState.SIGN_IN
        ? AuthState.SIGN_UP
        : AuthState.SIGN_IN
    );
  }, []);

  return (
    <div className={`${layout.flex.col.center} h-screen bg-blue-300`}>
      <div className='py-10 px-4 md:px-10 shadow-xl rounded-2xl bg-white w-[90%] lg:w-3/5 xl:w-1/3'>
        <h1 className='text-center text-5xl font-semibold mb-5'>
          {authState === AuthState.SIGN_IN ? "Login" : "Sign Up"}
        </h1>

        <div className={layout.flex.col.center + "gap-4 "}>
          {/* NAME */}
          {fields
            .filter(
              (eachField) =>
                !eachField.authState || eachField.authState === authState
            )
            .map((eachField: FieldType) => (
              <Input
                key={eachField.id}
                type={eachField.type}
                labelText={eachField.labelText}
                id={eachField.id}
                value={credentials[eachField.id]}
                onChange={credentialsHandler}
              />
            ))}

          <button
            onClick={authState === AuthState.SIGN_IN ? login : register}
            className='shadow-xl rounded-sm bg-blue-600 hover:bg-blue-500 text-white text-center uppercase w-full p-2'
          >
            {authState === AuthState.SIGN_IN ? "Login" : "Sign Up"}
          </button>
          <div className={`${layout.flex.row.center} gap-6 w-full `}>
            <div
              className={`${layout.flex.row.center} p-2 rounded-full shadow-xl cursor-pointer`}
              onClick={() => signIn("google", { callbackUrl: HOME })}
            >
              <FcGoogle size={30} />
            </div>
            <div
              className={`${layout.flex.row.center} p-2 rounded-full shadow-xl cursor-pointer`}
              onClick={() => signIn("github", { callbackUrl: HOME })}
            >
              <FaGithub size={30} />
            </div>
          </div>
          <a onClick={toggleAuthState}>
            {authState === AuthState.SIGN_IN ? (
              <p className='font-semibold'>
                {"Don't have an account yet?"}
                <span className='cursor-pointer hover:underline text-blue-700'>
                  Sign Up
                </span>
              </p>
            ) : (
              <p className='font-semibold'>
                Already have an account?{" "}
                <span className='cursor-pointer hover:underline text-blue-700'>
                  LogIn
                </span>
              </p>
            )}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Auth;
