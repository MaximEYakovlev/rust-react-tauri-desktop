// import React from 'react';

// export const DoctorPage: React.FC = () => (
//   <div>
//     <h1>Doctor Dashboard</h1>
//     <h3>- create a new patient</h3>
//     <h3>- list of patients</h3>
//     {/* Добавьте функционал для доктора здесь */}
//   </div>
// );

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Message } from 'semantic-ui-react';

export const DoctorPage: React.FC = () => {
  const [patientsExist, setPatientsExist] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [doctorId, setDoctorId] = useState<number | null>(null);

  const checkPatients = () => {
    // Retrieve existing patients or initialize empty array
    const patients = JSON.parse(localStorage.getItem('patients') || '[]');
    const userPatients = patients.filter((p: any) => p.doctorId === doctorId);
    setPatientsExist(userPatients.length > 0);
    setLoading(false);
  };

  useEffect(() => {
    const fetchDoctorId = () => {
      // Get the current doctor's ID
      // Assuming we can get the doctor's ID from localStorage or AuthContext
      const currentDoctorId = JSON.parse(localStorage.getItem('currentDoctorId') || 'null');
      setDoctorId(currentDoctorId);
      checkPatients();
    };

    fetchDoctorId();
  }, []); // Run only on mount

  return (
    <div>
      <h1>Doctor Dashboard</h1>
      <Link to="/create-patient">
        <Button primary>Create New Patient</Button>
      </Link>
      {patientsExist && (
        <Link to="/patients-list">
          <Button primary>List of Patients</Button>
        </Link>
      )}
      {error && <Message negative>{error}</Message>}
    </div>
  );
};
