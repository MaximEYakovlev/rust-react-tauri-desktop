// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import {Header} from './components/Header';
// import HomePage from './pages/ HomePage';
// import {AdminPage} from './pages/AdminPage';
// import {DoctorPage} from './pages/ DoctorPage';

// const App: React.FC = () => (
//   <Router>
//     <Header />
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/admin" element={<AdminPage />} />
//       <Route path="/doctor" element={<DoctorPage />} />
//     </Routes>
//   </Router>
// );

// export default App;

// import React, { useContext } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { Header } from './components/Header';
// import { HomePage } from './pages/ HomePage';
// import { AdminPage } from './pages/AdminPage';
// import { DoctorPage } from './pages/ DoctorPage';
// import { AuthProvider, AuthContext } from './context/AuthContext';

// const App: React.FC = () => {
//   return (

//     <Router>
//       <AuthProvider>
//         <Header />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route
//             path="/admin"
//             element={
//               <ProtectedRoute role="admin">
//                 <AdminPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/doctor"
//             element={
//               <ProtectedRoute role="doctor">
//                 <DoctorPage />
//               </ProtectedRoute>
//             }
//           />
//         </Routes>
//       </AuthProvider>
//     </Router>

//   );
// };

// const ProtectedRoute: React.FC<{ role: 'admin' | 'doctor'; children: JSX.Element }> = ({ role, children }) => {
//   const { isAuthenticated, role: userRole } = useContext(AuthContext);

//   if (!isAuthenticated || userRole !== role) {
//     return <Navigate to="/" />;
//   }

//   return children;
// };

// export default App;

import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/ HomePage';
import { AdminPage } from './pages/AdminPage';
import { DoctorPage } from './pages/ DoctorPage';
import { CreateDoctorPage } from './pages/CreateDoctorPage';
import { DoctorsListPage } from './pages/DoctorsListPage';
import { CreatePatientPage } from './pages/CreatePatientPage';
import { PatientsListPage } from './pages/PatientsListPage';
import { CreateProcedurePage } from './pages/CreateProcedurePage';
import { ProceduresListPage } from './pages/ProceduresListPage';
import { ServicePage } from './pages/ServicePage';
import { AuthProvider, AuthContext } from './context/AuthContext';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute role="admin">
                <AdminPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/doctor"
            element={
              <ProtectedRoute role="doctor">
                <DoctorPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-patient"
            element={
              <ProtectedRoute role="doctor">
                <CreatePatientPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/patients-list"
            element={
              <ProtectedRoute role="doctor">
                <PatientsListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-procedure"
            element={
              <ProtectedRoute role="admin">
                <CreateProcedurePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/procedures-list"
            element={
              <ProtectedRoute role="admin">
                <ProceduresListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-doctor"
            element={
              <ProtectedRoute role="admin">
                <CreateDoctorPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/doctors-list"
            element={
              <ProtectedRoute role="admin">
                <DoctorsListPage />
              </ProtectedRoute>
            }
          />
           <Route
            path="/service-data"
            element={
              <ProtectedRoute role="admin">
                <ServicePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

const ProtectedRoute: React.FC<{ role: 'admin' | 'doctor'; children: JSX.Element }> = ({ role, children }) => {
  const { isAuthenticated, role: userRole } = useContext(AuthContext);

  if (!isAuthenticated || userRole !== role) {
    return <Navigate to="/" />;
  }

  return children;
};

export default App;
