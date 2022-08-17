import React from 'react';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export interface VaccineChartTypes {
  chartData: {
    totalUser: number;
    userWithAboveTwoDose: number;
    userWithOneDose: number;
    userWithZeroDose: number;
  };
}

export const Loading: React.FunctionComponent<VaccineChartTypes> = ({
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
    <Pie
      data={data}
      options={{
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
      }}
    />
  );
};
