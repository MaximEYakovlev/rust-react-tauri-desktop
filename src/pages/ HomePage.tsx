// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import {AuthForm} from '../components/ AuthForm';

// const HomePage: React.FC = () => {
//   const navigate = useNavigate();

//   const handleLogin = ({ role, username, password }: { role: string; username?: string; password: string }) => {
//     // Можно добавить проверку через authService.
//     if (role === 'admin') {
//       navigate('/admin');
//     } else if (role === 'doctor') {
//       navigate('/doctor');
//     }
//   };

//   return (
//     <div>
//       <h1>Welcome to the Medical App</h1>
//       <AuthForm onLogin={handleLogin} />
//     </div>
//   );
// };

// export default HomePage;

// import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {AuthForm} from '../components/ AuthForm';
// import {AuthContext} from '../context/AuthContext';

// export const HomePage: React.FC = () => {
//   const navigate = useNavigate();
//   const { login } = useContext(AuthContext);
//   const [error, setError] = useState<string | null>(null);

//   const handleLogin = ({ role, username, password }: { role: string; username?: string; password: string }) => {
//     const isSuccess = login(role, username, password);
//     if (isSuccess) {
//       if (role === 'admin') {
//         navigate('/admin');
//       } else if (role === 'doctor') {
//         navigate('/doctor');
//       }
//     } else {
//       setError('Invalid credentials. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h1>Welcome to the Medical App</h1>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <AuthForm onLogin={handleLogin} />
//     </div>
//   );
// };

// import React, { useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {AuthForm} from '../components/ AuthForm';
// import {AuthContext} from '../context/AuthContext';

// export const HomePage: React.FC = () => {
//   const navigate = useNavigate();
//   const { isAuthenticated, role, login } = useContext(AuthContext);
//   const [error, setError] = useState<string | null>(null);

//   // Если пользователь уже залогинен, перенаправить его на соответствующую страницу
//   useEffect(() => {
//     if (isAuthenticated) {
//       if (role === 'admin') {
//         navigate('/admin');
//       } else if (role === 'doctor') {
//         navigate('/doctor');
//       }
//     }
//   }, [isAuthenticated, role, navigate]);

//   const handleLogin = ({ role, username, password }: { role: string; username?: string; password: string }) => {
//     const isSuccess = login(role, username, password);
//     if (!isSuccess) {
//       setError('Invalid credentials. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h1>Welcome to the Medical App</h1>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <AuthForm onLogin={handleLogin} />
//     </div>
//   );
// };

import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../components/ AuthForm';
import { AuthContext } from '../context/AuthContext';
import { Dropdown } from 'semantic-ui-react';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [role, setRole] = useState<'admin' | 'doctor' | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = ({ username, password }: { username?: string; password: string }) => {
    if (role) {
      const isSuccess = login(role, username, password);
      if (isSuccess) {
        if (role === 'admin') {
          navigate('/admin');
        } else if (role === 'doctor') {
          navigate('/doctor');
        }
      } else {
        setError('Invalid credentials. Please try again.');
      }
    }
  };

  const roleOptions = [
    { key: 'admin', text: 'Admin', value: 'admin' },
    { key: 'doctor', text: 'Doctor', value: 'doctor' },
  ];

  return (
    <div>
      <h1>Welcome to the Nist App</h1>

      <Dropdown
        placeholder="Select Role"
        fluid
        selection
        options={roleOptions}
        onChange={(e, { value }) => setRole(value as 'admin' | 'doctor')}
      />

      {role && (
        <>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <AuthForm role={role} onLogin={handleLogin} />
        </>
      )}
    </div>
  );
};
