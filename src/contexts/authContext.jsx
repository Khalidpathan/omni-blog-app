import React, { createContext, useState, useEffect } from 'react';
import api from '../api/axiosInstance';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const email = localStorage.getItem('userEmail');
    if (token && email) setUser(email);
  }, []);

  const login = async (email, password) => {
    const resp = await api.post('/users/login/', { email, password });
    localStorage.setItem('accessToken', resp.data.access);
    localStorage.setItem('userEmail', email);
    setUser(email);
  };

  const signup = async (email, password) => {
    await api.post('/users/signup/', { email, password });
    await login(email, password);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userEmail');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}