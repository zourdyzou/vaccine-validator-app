import React from 'react';
import Image from 'next/image';
import { LogoutIcon } from '@heroicons/react/outline';

export const NavigationHeader: React.FunctionComponent = () => (
  <nav className="h-14 flex justify-end pr-4 m-4 bg-indigo-800 rounded">
    <ul className="flex items-center gap-5">
      <li>
        <div className="h-10 w-10 relative">
          <Image
            src="https://i.pinimg.com/564x/74/19/f1/7419f1b7a1a1fb519bd613bc8b1a40c5.jpg"
            layout="fill"
            className="rounded-full"
            objectFit="cover"
            alt="profile admin"
          />
        </div>
      </li>
      |
      <li>
        <LogoutIcon className="w-7 h-7" />
      </li>
    </ul>
  </nav>
);
