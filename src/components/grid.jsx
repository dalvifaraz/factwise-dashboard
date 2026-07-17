import { AgGridReact } from 'ag-grid-react';

const Grid = ({ rowData, colDefs }) => {
    console.log('rowData:', rowData);
    console.log('colDefs:', colDefs);
  return (
    <div>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        domLayout='autoHeight'
      />
    </div>
  );
};

export default Grid