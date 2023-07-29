import React, { useState } from 'react';

import TableComponent from './TableComponent';
//import './App.css'; 
import ModalContent from './components/ModalContent';


const App = () => {
  const sheetStyle = {
    backgroundColor: 'transparent',
    width: '30cm',
    height: '18.3cm',
    padding: '2cm',
    margin: '0 auto',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
  };
  const [data, setData] = useState([
    { id: 1, name: 'mohit chopra', age: 20, email: 'mohit123@gmail.com' },
    { id: 2, name: 'himanshu chopra', age: 27, email: 'himi123@gmail.com' },
    { id: 3, name: 'sonali chopra', age: 28, email: 'sonali123@gmail.com' },
  ]);

  const handleAddItem = (item) => {
    // Creates a new object with a unique id
    const newItem = { id: data.length + 1, ...item };

    // Adds the new item to the data array
    setData([...data, newItem]);
  };
  
  return (
    <div style={sheetStyle}>
      <div className="container">
        <h1>MOHIT CHOPRA</h1>
        <TableComponent data={data}/>
        <ModalContent handleSubmit={handleAddItem}/>
      </div>
    </div>
  );
};

export default App;
