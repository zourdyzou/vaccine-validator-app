import { FunctionComponent, ReactNode } from 'react';

import Link from 'next/link';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';

import { sideBarItems } from '@/utils/data-content';

import { GithubAuthor } from '@/components/shared/GithubAuthor';
import { NavigationHeader } from '@/components/navbar';

const DashboardLayout: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex">
      <div className="flex flex-col w-[400px] h-screen px-4 py-8 overflow-y-auto relative">
        <h2 className="text-3xl font-semibold text-start text-indigo-500 flex items-center gap-2 pb-3 ">
          <CoronavirusIcon className="w-[50px] h-[50px] text-red-600" />
          Vaccine
        </h2>

        <div className="flex flex-col justify-between mt-6">
          <aside>
            <ul>
              {sideBarItems.map((sidebarContent) => {
                return (
                  <li key={`sidebar-${sidebarContent.text}`}>
                    <Link href={sidebarContent.path}>
                      <a className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-cyan-200">
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
