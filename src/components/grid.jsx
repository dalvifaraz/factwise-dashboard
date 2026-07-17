import { AgGridProvider, AgGridReact } from 'ag-grid-react';
import { AllCommunityModule } from 'ag-grid-community';

const modules = [AllCommunityModule];

const Grid = ({ rowData, colDefs, gridRef, onGridReady }) => {
  return (
    <div style={{ height: 'calc(100vh - 150px)', width: '100%' }}>
      <AgGridProvider modules={modules}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          ref={gridRef}
          onGridReady={onGridReady}
        />
      </AgGridProvider>
    </div>
  );
};

export default Grid