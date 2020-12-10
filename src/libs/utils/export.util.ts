import * as XLSX from 'xlsx';

const headingOrder = [
  [
    'Created Date',
    'Order ID',
    'Reference No.',
    'Order Type',
    'Status',
    'Service Type',
    'Container Size',
    'Container Style',
    'Container Quantity',
    'Truck Type',
    'Truck Quantity',
    'Truck Load',
    'Cargo Type',
    'Cargo Name',
    'Cargo Weight',
    'Pickup Address',
    'Pickup Time',
    'Dropoff Address',
    'Dropoff Time',
    'Pickup Empty Container',
    'Pickup Empty Address',
    'Dropoff Empty Container',
    'Dropoff Empty Address',
    'Person In Charge',
    'In Charge Contact No.',
    'Pickup Code',
    'Delivery Code',
    'Truck Owner ID',
    'Truck Owner Name',
    'Company Name',
    'Truck Owner Email',
  ],
];

const headingTruckOwner = [
  [
    'Created Date',
    'Order ID',
    'Status',
    'Pickup Address',
    'Pickup Time',
    'Dropoff Address',
    'Dropoff Time',
    'Driver In Charge',
    'Truck Plate No.',
    'Customer Name',
    'Customer Email',
    'VAT',
    'VAT information',
  ],
];

export const exportAsCSV = (json: any, excelFileName: string): void => {
  const ws = XLSX.utils.json_to_sheet(json);
  if (excelFileName === 'order') {
    XLSX.utils.sheet_add_json(ws, headingOrder, { skipHeader: true });
  } else {
    XLSX.utils.sheet_add_json(ws, headingTruckOwner, { skipHeader: true });
  }
  const csv = XLSX.utils.sheet_to_csv(ws);
  const new_csv = '\uFEFF' + csv;
  const blob = new Blob([new_csv], { type: 'text/csv;charset=UTF-8' });
  const download = document.createElement('a');
  const url = window.URL.createObjectURL(blob);
  download.href = url;
  download.download = excelFileName + '.csv';
  download.click();
  window.URL.revokeObjectURL(url);
  // check if need to remove download
};

export const exportAsXLS = (json: any, excelFileName: string): void => {
  const ws = XLSX.utils.json_to_sheet(json);
  if (excelFileName === 'order') {
    XLSX.utils.sheet_add_json(ws, headingOrder, { skipHeader: true });
  } else {
    XLSX.utils.sheet_add_json(ws, headingTruckOwner, { skipHeader: true });
  }
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, excelFileName);
  XLSX.writeFile(wb, excelFileName + '.xls');
};
