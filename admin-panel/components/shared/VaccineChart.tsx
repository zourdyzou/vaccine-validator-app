import React from 'react';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export interface VaccineChartTypes {
  chartData: {
    totalUser: number;
    userWithAboveTwoDose: number;
    userWithOneDose: number;
    userWithZeroDose: number;
  };
}

export const VaccineChart: React.FunctionComponent<VaccineChartTypes> = ({
  chartData,
}) => {
  const data = {
    labels: [
      `1 dose ${Math.floor(
        (chartData.userWithOneDose / chartData.totalUser) * 100
      )}%`,
      `Upper 2 doses ${Math.floor(
        (chartData.userWithAboveTwoDose / chartData.totalUser) * 100
      )}%`,
      `0 dose ${Math.floor(
        (chartData.userWithZeroDose / chartData.totalUser) * 100
      )}%`,
    ],
    datasets: [
      {
        label: 'Vaccination Analysis',
        data: [
          chartData.userWithOneDose,
          chartData.userWithAboveTwoDose,
          chartData.userWithZeroDose,
        ],
        backgroundColor: [
          'rgba(241, 90, 34, 1)',
          'rgba(194, 249, 112, 1)',
          'rgb(255,0,90)',
        ],
        borderColor: [
          'rgba(241, 90, 34, 1)',
          'rgba(194, 249, 112, 1)',
          'rgb(255,0,90)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-[400px] border p-3 bg-white rounded">
      <h1 className="pb-7 pt-3 px-2 text-3xl uppercase text-black font-bold">
        Vaccine Analysis
      </h1>
      <Doughnut
        data={data}
        options={{
          plugins: {
            legend: {
              position: 'bottom',
            },
          },
        }}
      />
    </div>
  );
};
