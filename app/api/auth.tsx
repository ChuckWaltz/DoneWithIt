import client from './client';

const login = (email: string, password: string) =>
  client.post('/auth', { email, password });

const register = (name: string, email: string, password: string) =>
  client.post('/users', { name, email, password });

export default {
  login,
  register,
};
