import type { NextPage } from 'next';
import Head from 'next/head';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import React, { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const LoginPage: NextPage = () => {
  const [admin, setAdmin] = useState({
    username: '',
    password: '',
  });

  const session = useSession();

  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setAdmin((prevState) => ({
      ...prevState,
      [event.target.name]: value,
    }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const res = await signIn('credentials', {
      username: admin.username,
      password: admin.password,
      redirect: false,
    });

    if (!res?.ok) {
      throw Error(`${res?.status}`);
    }

    await router.push('/');
  };

  React.useEffect(() => {
    router.pathname === '/login' &&
      session.status === 'authenticated' &&
      router.replace('/');
  }, [router, session.status]);

  return (
    <>
      <Head>
        <title>Vaccination Management</title>
      </Head>
      <div className="w-full h-screen ">
        <div className="h-full flex items-center justify-center">
          <div className="h-[400px] w-[350px] px-5 py-6 space-y-3 rounded-xl bg-lime-400 text-gray-100">
            <h2 className="text-3xl font-semibold text-indigo-500 flex items-center gap-2 pb-3 p-3">
              <CoronavirusIcon className="w-[50px] h-[50px] text-red-600" />
              Vaccine
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6 ng-untouched">
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-black">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  value={admin.username}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-white focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="password" className="block text-black">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={admin.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-white focus:dark:border-violet-400"
                />
              </div>
              <button
                type="submit"
                className="block w-full p-3 text-center rounded text-white bg-violet-800 uppercase"
              >
                login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
