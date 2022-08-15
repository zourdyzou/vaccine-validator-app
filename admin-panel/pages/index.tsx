import type { NextPage } from 'next';
import Head from 'next/head';

import DashboardLayout from '../screens/layout/layout';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vaccination Management</title>
      </Head>
      <DashboardLayout>
        <div className="border border-dashed p-5 m-4">content</div>
      </DashboardLayout>
    </>
  );
};

export default Home;
