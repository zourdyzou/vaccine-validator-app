import React from 'react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { LogoutIcon } from '@heroicons/react/outline';

export const NavigationHeader: React.FunctionComponent = () => {
  return (
    <nav className="h-14 flex justify-end pr-4 m-4 bg-indigo-500 rounded">
      <ul className="flex items-center gap-5">
        <li>
          <div className="h-10 w-10 relative">
            <Image
              src="https://i.pinimg.com/564x/dc/f0/26/dcf0266ef572a88d7eeb53f404d3e97b.jpg"
              layout="fill"
              className="rounded-full"
              objectFit="cover"
              alt="profile admin"
            />
          </div>
        </li>
        |
        <li
          onClick={async () => {
            localStorage.removeItem('token');
            await signOut();
          }}
          className="hover:cursor-pointer p-2 hover:bg-indigo-700 hover:rounded"
        >
          <LogoutIcon className="w-7 h-7" />
        </li>
      </ul>
    </nav>
  );
};
