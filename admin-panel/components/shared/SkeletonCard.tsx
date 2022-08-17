import React from 'react';

export const CardStatSkeleton: React.FunctionComponent = () => (
  <div className="flex w-full flex-1 flex-col items-center  px-20">
    <div className="mt-12 w-1/2 animate-pulse flex-row items-center justify-center space-x-1 rounded-xl border p-6 ">
      <div className="flex flex-col space-y-2">
        <div className="h-6 w-9/12 rounded-md bg-gray-300 " />
        <div className="h-6 w-9/12 rounded-md bg-gray-300 " />
        <div className="h-6 w-9/12 rounded-md bg-gray-300 " />
        <div className="h-6 w-9/12 rounded-md bg-gray-300 " />
      </div>
    </div>
  </div>
);

export const SkeletonCard: React.FunctionComponent = () => (
  <div className="bg-white p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none ">
    <div className="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-200 animate-pulse" />
    <div className="flex flex-col flex-1 gap-5 sm:p-2">
      <div className="flex flex-1 flex-col gap-3">
        <div className="bg-gray-200 w-full animate-pulse h-14 rounded-2xl" />
        <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" />
        <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" />
        <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" />
        <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" />
      </div>
      <div className="mt-auto flex gap-3">
        <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full" />
        <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full" />
        <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full ml-auto" />
      </div>
    </div>
  </div>
);
