// import React from 'react';
// import { Menu } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';

// export const Header: React.FC = () => (
//   <Menu>
//     <Menu.Item name="home">
//       <Link to="/">Home</Link>
//     </Menu.Item>
//     <Menu.Item name="admin">
//       <Link to="/admin">Admin</Link>
//     </Menu.Item>
//     <Menu.Item name="doctor">
//       <Link to="/doctor">Doctor</Link>
//     </Menu.Item>
//   </Menu>
// );

import React, { useContext } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

export const Header: React.FC = () => {
  const { isAuthenticated, role, logout } = useContext(AuthContext);

  return (
    <Menu>
      <Menu.Item name="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      {isAuthenticated && role === 'admin' && (
        <Menu.Item name="admin">
          <Link to="/admin">Admin</Link>
        </Menu.Item>
      )}
      {isAuthenticated && role === 'doctor' && (
        <Menu.Item name="doctor">
          <Link to="/doctor">Doctor</Link>
        </Menu.Item>
      )}
      {isAuthenticated && (
        <Menu.Item name="logout" onClick={logout}>
          Logout
        </Menu.Item>
      )}
    </Menu>
  );
};

