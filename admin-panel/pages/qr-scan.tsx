import type { NextPage } from 'next';
import Head from 'next/head';

import DashboardLayout from '@/screens/layout/layout';

const QRPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vaccination Management</title>
      </Head>
      <DashboardLayout>
        <div className="m-4 mt-10 flex flex-grow xl:flex-nowrap flex-wrap gap-5">
          <h1>QR Scan page</h1>
        </div>
      </DashboardLayout>
    </>
  );
};

export default QRPage;
