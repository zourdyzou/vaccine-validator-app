import React from 'react';
import { SvgIconComponent } from '@mui/icons-material';

interface CardStatsProps {
  data: number;
  label: string;
  ReactIcon:
    | React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    | SvgIconComponent;
  color: string;
}

export const CardStats: React.FunctionComponent<CardStatsProps> = ({
  data,
  label,
  ReactIcon,
  color,
}) => {
  return (
    <div className="border-4 border-dashed bg-slate-900 rounded w-full h-[150px] flex justify-between items-center">
      <div className="flex flex-col px-3 pl-4 pb-4 w-full">
        <h2 className="text-xl capitalize font-bold pb-5 text-cyan-500 whitespace-nowrap">
          {label}
        </h2>
        <span className="text-4xl font-bold">
          {data.toLocaleString('de-DE')}
        </span>
      </div>
      <div className="p-6 pt-8">
        <ReactIcon className={`w-14 h-14 ${color}`} />
      </div>
    </div>
  );
};
