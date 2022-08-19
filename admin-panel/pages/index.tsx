import type { NextPage, GetServerSideProps } from 'next';

import Head from 'next/head';
import {
  UsersIcon,
  BadgeCheckIcon,
  LocationMarkerIcon,
} from '@heroicons/react/outline';
import VaccinesIcon from '@mui/icons-material/Vaccines';

import DashboardLayout from '@/screens/layout/layout';
import { CardStats } from '@/components/data-card/card-stats';

import { wrapper } from '@/redux/store';

import { getSummary } from '@/redux/actions/admin-action';
import { useAppSelector } from '@/hooks/redux';
import { VaccineChart } from '@/components/shared/VaccineChart';
import { getSession, useSession } from 'next-auth/react';
import * as React from 'react';
import { LatestVaccineLotTable } from '@/components/shared/LatestVaccineLotTable';

const Home: NextPage = () => {
  const state = useAppSelector((state) => state.adminSummary);

  return (
    <>
      <Head>
        <title>Vaccination Management</title>
      </Head>
      <DashboardLayout>
        <div className="m-4 mt-10 flex flex-grow xl:flex-nowrap flex-wrap gap-5">
          <CardStats
            data={state.totalUser}
            label="Total user"
            ReactIcon={UsersIcon}
            color="text-orange-500"
          />
          <CardStats
            data={state.userVaccinated}
            label="User vaccinated"
            ReactIcon={BadgeCheckIcon}
            color="text-green-500"
          />
          <CardStats
            data={state.availableVaccineDose}
            label="Available Vaccine dose"
            ReactIcon={VaccinesIcon}
            color="text-red-500"
          />
          <CardStats
            data={state.totalPlace}
            label="Total places"
            ReactIcon={LocationMarkerIcon}
            color="text-pink-600"
          />
        </div>
        <div className="m-5 flex  gap-5">
          <VaccineChart chartData={state.userVaccinatedAnalyst} />
          <div className="w-full">
            <LatestVaccineLotTable list={state.latestVaccineLot} />
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(async ({ store, req }) => {
    const session = await getSession({ req });

    session && (await store.dispatch(getSummary() as any));
  });

export default Home;
