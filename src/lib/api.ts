// src/lib/api.ts
import axios from 'axios';

export const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:3002';

export const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' }
});

// Request interceptor for auth token
api.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('accessToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('accessToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  role?: string;
  avatarUrl?: string;
  stats?: { trips?: number; expenses?: number; budgetUsed?: number };
};

export type Expense = { id: string; title: string; date: string; amount: number; status: string };
export type Employee = { id: string; name: string; email: string; role: string; status: string; group?: string; manager?: string };
