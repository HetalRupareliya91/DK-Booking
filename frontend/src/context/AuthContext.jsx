import { createContext, useContext, useState } from 'react';
import { api } from '../api/client';

const AuthContext = createContext(null);

function readUser() {
  try { return JSON.parse(localStorage.getItem('dk_user')); } catch (e) { return null; }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(readUser);

  const login = async (email, password) => {
    const res = await api('/api/auth/login', { method: 'POST', body: { email, password } });
    localStorage.setItem('dk_token', res.token);
    localStorage.setItem('dk_user', JSON.stringify(res.user));
    setUser(res.user);
    return res.user;
  };

  const logout = () => {
    localStorage.removeItem('dk_token');
    localStorage.removeItem('dk_user');
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
