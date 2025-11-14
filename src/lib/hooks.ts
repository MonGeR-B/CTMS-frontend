// src/lib/hooks.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api, UserProfile, Expense, Employee } from './api';

// Profile
export const useProfile = () => 
  useQuery({
    queryKey: ['profile'],
    queryFn: async (): Promise<UserProfile> => {
      const { data } = await api.get('/api/auth/profile');
      return data;
    }
  });

// Dashboard Stats
export const useDashboardStats = () => 
  useQuery({
    queryKey: ['dashboardStats'],
    queryFn: async () => {
      const { data } = await api.get('/api/dashboard/stats');
      return data;
    }
  });

// Expenses
export const useRecentExpenses = (limit = 8) => 
  useQuery({
    queryKey: ['recentExpenses', limit],
    queryFn: async (): Promise<Expense[]> => {
      const { data } = await api.get('/api/expenses', { params: { limit } });
      return data;
    }
  });

export const useCreateExpense = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (expense: Omit<Expense, 'id'>) => {
      const { data } = await api.post('/api/expenses', expense);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recentExpenses'] });
      queryClient.invalidateQueries({ queryKey: ['dashboardStats'] });
    }
  });
};

// Employees
export const useEmployees = (params = { page: 1, limit: 20 }) => 
  useQuery({
    queryKey: ['employees', params],
    queryFn: async () => {
      const { data } = await api.get('/api/employees', { params });
      return data;
    }
  });
