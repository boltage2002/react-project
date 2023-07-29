import React from 'react';
import './TableStyles.css';

const TableComponent = () => {
  const columns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Age', accessor: 'age' },
    { Header: 'Email', accessor: 'email' },
  ];

  const data = [
    { id: 1, name: 'mohit chopra', age: 20, email: 'mohit123@gmail.com' },
    { id: 2, name: 'himanshu chopra', age: 27, email: 'himi123@gmail.com' },
    { id: 3, name: 'sonali chopra', age: 28, email: 'sonali123@gmail.com' },
    
  ];

  return (
    <div className="table-container">
      <h2>Informations</h2>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.Header}>{column.Header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              {columns.map((column) => (
                <td key={column.Header}>{item[column.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
