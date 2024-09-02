// import React from 'react';

// export const AdminPage: React.FC = () => (
//   <div>
//     <h1>Admin Dashboard</h1>
//     <h3>- create a new doctor</h3>
//     <h3>- list of doctors</h3>
//     <h3>- get service data</h3>
//     {/* Добавьте функционал для администратора здесь */}
//   </div>
// );

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from 'semantic-ui-react';

// export const AdminPage: React.FC = () => {
//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       <Link to="/create-doctor">
//         <Button primary>Create a New Doctor</Button>
//       </Link>
//     </div>
//   );
// };

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Button, Message } from 'semantic-ui-react';

// export const AdminPage: React.FC = () => {
//   const [doctorsExist, setDoctorsExist] = useState<boolean>(false);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const checkDoctors = async () => {
//       try {
//         // Replace with your API endpoint to check if doctors exist
//         const response = await fetch('/api/doctors/count');
//         if (!response.ok) {
//           throw new Error('Failed to fetch doctors count.');
//         }
//         const { count } = await response.json();
//         setDoctorsExist(count > 0);
//       } catch (err) {
//         setError('Failed to load doctors information.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkDoctors();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       <Link to="/create-doctor">
//         <Button primary>Create a New Doctor</Button>
//       </Link>
//       {doctorsExist && (
//         <Link to="/doctors-list">
//           <Button secondary>List of Doctors</Button>
//         </Link>
//       )}
//       {error && <Message negative>{error}</Message>}
//     </div>
//   );
// };

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Message } from 'semantic-ui-react';

export const AdminPage: React.FC = () => {
  const [doctorsExist, setDoctorsExist] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const checkDoctors = () => {
    // Use local storage to check for existing doctors
    const doctors = JSON.parse(localStorage.getItem('doctors') || '[]');
    setDoctorsExist(doctors.length > 0);
    setLoading(false);
  };

  useEffect(() => {
    checkDoctors();
  }, []); // Run only on mount

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Link to="/create-doctor">
        <Button primary>Create New Doctor</Button>
      </Link>
      {doctorsExist && (
        <Link to="/doctors-list">
          <Button primary>List of Doctors</Button>
        </Link>
      )}
      {error && <Message negative>{error}</Message>}
      <Link to="/service">
        <Button primary>Service Data</Button>
      </Link>
    </div>
  );
};
