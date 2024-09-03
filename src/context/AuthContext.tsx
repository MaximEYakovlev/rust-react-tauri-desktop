import React, { createContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextProps {
  isAuthenticated: boolean;
  role: 'admin' | 'doctor' | null;
  login: (role: string, username?: string, password: string) => boolean;
  logout: () => void;
}

const mockUsers = {
  admin: { username: 'A', password: '12' },
  doctor: { username: 'D', password: '12' },
};

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  role: null,
  login: () => false,
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [role, setRole] = useState<'admin' | 'doctor' | null>(null);
  const navigate = useNavigate();

  const login = (role: string, username?: string, password: string): boolean => {
    if (role === 'admin' && username === mockUsers.admin.username && password === mockUsers.admin.password) {
      setIsAuthenticated(true);
      setRole('admin');
      return true;
    }
    if (role === 'doctor' && password === mockUsers.doctor.password) {
      setIsAuthenticated(true);
      setRole('doctor');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setRole(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

