import type { NextPage } from 'next';
import Head from 'next/head';
import {
  UsersIcon,
  BadgeCheckIcon,
  LocationMarkerIcon,
} from '@heroicons/react/outline';
import VaccinesIcon from '@mui/icons-material/Vaccines';

import DashboardLayout from '@/screens/layout/layout';
import { CardStats } from '@/components/data-card/card-stats';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vaccination Management</title>
      </Head>
      <DashboardLayout>
        <div className="m-4 mt-10 flex flex-grow xl:flex-nowrap flex-wrap gap-5">
          <CardStats
            data={1000}
            label="Total user"
            ReactIcon={UsersIcon}
            color="text-orange-500"
          />
          <CardStats
            data={246}
            label="User vaccinated"
            ReactIcon={BadgeCheckIcon}
            color="text-green-500"
          />
          <CardStats
            data={40000}
            label="Available Vaccine dose"
            ReactIcon={VaccinesIcon}
            color="text-red-500"
          />
          <CardStats
            data={20}
            label="Total places"
            ReactIcon={LocationMarkerIcon}
            color="text-pink-600"
          />
        </div>
      </DashboardLayout>
    </>
  );
};

export default Home;
