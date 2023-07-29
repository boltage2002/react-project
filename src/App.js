import React from 'react';
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

  
  return (
    <div style={sheetStyle}>
      <div className="container">
        <h1>MOHIT CHOPRA</h1>
        <TableComponent />
        <ModalContent/>
      </div>
    </div>
  );
};

export default App;
