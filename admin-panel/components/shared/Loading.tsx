import React from 'react';

export const Loading: React.FunctionComponent = () => (
  <div className="flex items-center justify-center space-x-2">
    <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400" />
    <div className="w-4 h-4 rounded-full animate-pulse bg-indigo-500" />
    <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600" />
  </div>
);
