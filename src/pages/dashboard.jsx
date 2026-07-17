import Grid from '../components/grid';
import './dashboard.css';
import employeeData from '../mock/employee_details.json';
import { useRef, useState } from 'react';

const Dashboard = () => {
  const gridRef = useRef(null);
  const [search, setSearch] = useState('');

  const onGridReady = (params) => {
    gridRef.current = params.api;
  };

  const onSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    gridRef.current?.setGridOption('quickFilterText', value);
  };

  const handleClear = () => {
    setSearch('');

    gridRef.current?.setGridOption('quickFilterText', '');
  };

  const rowData = employeeData.employees.map((employee) => ({
    id: employee.id,
    name: employee.firstName + ' ' + employee.lastName,
    email: employee.email,
    department: employee.department,
    position: employee.position,
    salary: employee.salary,
    hireDate: employee.hireDate,
    age: employee.age,
    location: employee.location,
    performanceRating: employee.performanceRating,
    projectsCompleted: employee.projectsCompleted,
    isActive: employee.isActive,
    skills: employee.skills,
    manager: employee.manager
  }));

  const colDefs = [
    {
      field: 'id',
      headerName: 'ID',
      sortable: true,
      width: 70,
      minWidth: 60,
      maxWidth: 80,
    },
    {
      field: 'name',
      headerName: 'Name',
      sortable: true,
      width: 180,
      minWidth: 150,
      maxWidth: 250,
    },
    {
      field: 'email',
      headerName: 'Email',
      sortable: true,
      width: 250,
      minWidth: 220,
      maxWidth: 350,
    },
    {
      field: 'department',
      headerName: 'Department',
      sortable: true,
      width: 170,
      minWidth: 150,
      maxWidth: 220,
    },
    {
      field: 'position',
      headerName: 'Position',
      sortable: true,
      width: 200,
      minWidth: 180,
      maxWidth: 260,
    },
    {
      field: 'salary',
      headerName: 'Salary',
      sortable: true,
      width: 140,
      minWidth: 120,
      maxWidth: 160,
    },
    {
      field: 'hireDate',
      headerName: 'Hire Date',
      sortable: true,
      width: 140,
      minWidth: 130,
      maxWidth: 160,
    },
    {
      field: 'age',
      headerName: 'Age',
      sortable: true,
      width: 90,
      minWidth: 70,
      maxWidth: 100,
    },
    {
      field: 'location',
      headerName: 'Location',
      sortable: true,
      width: 160,
      minWidth: 140,
      maxWidth: 220,
    },
    {
      field: 'performanceRating',
      headerName: 'Performance Rating',
      sortable: true,
      width: 180,
      minWidth: 170,
      maxWidth: 220,
    },
    {
      field: 'projectsCompleted',
      headerName: 'Projects Completed',
      sortable: true,
      width: 180,
      minWidth: 170,
      maxWidth: 220,
    },
    {
      field: 'isActive',
      headerName: 'Active',
      sortable: true,
      width: 100,
      minWidth: 90,
      maxWidth: 120,
    },
    {
      field: 'skills',
      headerName: 'Skills',
      sortable: true,
      width: 260,
      minWidth: 220,
      maxWidth: 400,
      valueFormatter: (params) => params.value.join(', '),
    },
    {
      field: 'manager',
      headerName: 'Manager',
      sortable: true,
      width: 180,
      minWidth: 160,
      maxWidth: 250,
    },
  ];

  return (
    <div className='dashboard-container'>
      <h1>FactWise Dashboard</h1>
      <div className='form-group'>
        <label htmlFor='search'>Search Employees</label>

        <div className='search-box'>
          <input
            id='search'
            className='form-control'
            type='text'
            placeholder='Search by name, email, department...'
            value={search}
            onChange={onSearchChange}
          />

          <button
            type='button'
            className='clear-search'
            onClick={handleClear}
            style={{ display: search ? 'flex' : 'none' }}
          >
            ×
          </button>
        </div>
      </div>
      <Grid
        rowData={rowData}
        colDefs={colDefs}
        gridRef={gridRef}
        onGridReady={onGridReady}
      />
    </div>
  );
};

export default Dashboard;
