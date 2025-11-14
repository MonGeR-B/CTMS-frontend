// Global type definitions
export interface DashboardStats {
  activeTrips: number;
  pending: number;
  totalExpenses: number;
  budgetUsed: number;
}

export interface Expense {
  id: string;
  title: string;
  date: string;
  amount: number;
  status: 'pending' | 'approved' | 'rejected';
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  group?: string;
  manager?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role?: string;
  avatarUrl?: string;
  stats?: {
    trips?: number;
    expenses?: number;
    budgetUsed?: number;
  };
}