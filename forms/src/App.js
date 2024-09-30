import React, { useState } from 'react';
import EmployeeFamilyInfo from './components/EmployeeFamilyInfo'; // Adjust the path as necessary
import EmployeeServiceHistory from './components/EmployeeServiceHistory'; // Adjust the path as necessary
import EmployeeNominationDetails from './components/EmployeeNominationdetails.js';
import './components/styles.css';
import './components/Nominationdetails.css'; 
    



const App = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>DB4 CLOUD TECHNOLOGIES Pvt Ltd</h1>
      <h2>EMPLOYEE INFORMATION PORTAL</h2>
      {currentPage === 1 && <EmployeeFamilyInfo onNext={handleNextPage} onPrevious={handlePreviousPage} />}
      {currentPage === 2 && <EmployeeServiceHistory onNext={handleNextPage} onPrevious={handlePreviousPage} />}
      {currentPage === 3 && <EmployeeNominationDetails onNext={handleNextPage} onPrevious={handlePreviousPage} />}
    </div>
  );
};

export default App;
