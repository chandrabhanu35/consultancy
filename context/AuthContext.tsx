import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { AuthContextType, User } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check local storage for persisted session
    const storedUser = localStorage.getItem('vegvisir_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    // Mock authentication logic
    // In a real app, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        if (username === 'admin' && password === 'admin123') {
          const adminUser: User = {
            id: '1',
            username: 'admin',
            name: 'System Administrator',
            role: 'admin'
          };
          setUser(adminUser);
          localStorage.setItem('vegvisir_user', JSON.stringify(adminUser));
          resolve(true);
        } else if (username === 'employee' && password === 'emp123') {
          const empUser: User = {
            id: '2',
            username: 'employee',
            name: 'Sarah Field Officer',
            role: 'employee'
          };
          setUser(empUser);
          localStorage.setItem('vegvisir_user', JSON.stringify(empUser));
          resolve(true);
        } else {
          resolve(false);
        }
      }, 800); // Simulate network delay
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('vegvisir_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};