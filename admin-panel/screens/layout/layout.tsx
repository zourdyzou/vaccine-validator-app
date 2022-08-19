import { FunctionComponent, ReactNode, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';

import { sideBarItems } from '@/utils/data-content';

import { GithubAuthor } from '@/components/shared/GithubAuthor';
import { NavigationHeader } from '@/components/navbar';
import * as React from 'react';
import { Box } from '@mui/material';
import { Loading } from '@/components/shared/Loading';
import { useAppSelector } from '@/hooks/redux';
import { useSession } from 'next-auth/react';

const DashboardLayout: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const { pathname } = useRouter();
  const state = useAppSelector((state) => state.adminSummary);
  const { status, data } = useSession();
  const router = useRouter();

  if (status !== 'authenticated') {
    if (typeof window !== 'undefined') {
      router.push('/login');
    }
  }

  if (state.loading) {
    return (
      <Box sx={{ width: '100%', height: '100vh' }}>
        <div className="flex items-center justify-center h-full">
          <Loading />
        </div>
      </Box>
    );
  }

  return (
    <div className="flex">
      <div className="hidden xl:flex flex-col w-[400px] h-screen px-4 py-8 overflow-y-auto relative">
        <h2 className="text-3xl font-semibold text-start text-indigo-500 flex items-center gap-2 pb-3 ">
          <CoronavirusIcon className="w-[50px] h-[50px] text-red-600" />
          Vaccine
        </h2>

        <div className=" flex flex-col justify-between mt-6">
          <aside>
            <ul>
              {sideBarItems.map((sidebarContent) => {
                return (
                  <li key={`sidebar-${sidebarContent.text}`}>
                    <Link href={sidebarContent.path}>
                      <a
                        className={`flex items-center px-4 py-2 mt-5 text-white rounded-md hover:bg-indigo-700 ${
                          pathname === sidebarContent.path
                            ? 'bg-indigo-700'
                            : ''
                        }`}
                      >
                        {sidebarContent.icon}

                        <span className="mx-4 font-medium">
                          {sidebarContent.text}
                        </span>
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>

        <GithubAuthor />
      </div>

      <div className="w-full h-screen overflow-y-auto bg-slate-800">
        <div className="justify-center h-full">
          <NavigationHeader />

          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
