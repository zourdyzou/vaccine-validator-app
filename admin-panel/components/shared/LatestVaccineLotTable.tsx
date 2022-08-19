import React from 'react';
import moment from 'moment';

import { DataGrid } from '@mui/x-data-grid';

import { ILatestVaccineLot } from '@/interfaces/data-type';

export const LatestVaccineLotTable: React.FunctionComponent<{
  list: ILatestVaccineLot[];
}> = ({ list }) => {
  const tableHeader = [
    {
      field: 'name',
      headerName: 'Lot number',
      width: 200,
    },
    {
      field: 'vaccine',
      headerName: 'Vaccine',
      width: 200,
      renderCell: (params: any) => params.value.name,
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      width: 150,
      align: 'right',
      renderCell: (params: any) => params.value.toLocaleString('de-DE'),
    },
    {
      field: 'createdAt',
      headerName: 'time',
      flex: 1,
      renderCell: (params: any) =>
        moment(params.value).format('DD-MM-YYYY HH:mm:ss'),
    },
  ];
  return (
    <DataGrid
      autoHeight
      rows={list}
      columns={tableHeader as any}
      hideFooter
      density="comfortable"
      showCellRightBorder
      showColumnRightBorder
      disableSelectionOnClick
      className="bg-white text-black"
    />
  );
};
