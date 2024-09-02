import React, { useContext } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const Header: React.FC = () => {
  const { isAuthenticated, role, logout } = useContext(AuthContext);

  return (
    <Menu>
      <Menu.Item name="home">
        <Link to="/"><Icon name='home' size='big' /></Link>
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

