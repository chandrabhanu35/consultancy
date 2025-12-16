import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  items: string[];
}

export interface NavItem {
  label: string;
  path: string;
}

export type Role = 'admin' | 'employee';

export interface User {
  id: string;
  username: string;
  name: string;
  role: Role;
}

export interface Client {
  id: string;
  companyName: string;
  gstin: string;
  pan: string;
  contactPerson: string;
  phone: string;
  email: string;
  address: string;
  status: 'active' | 'inactive';
}

export interface Project {
  id: string;
  clientId: string;
  serviceType: string;
  status: 'pending' | 'in_progress' | 'completed' | 'on_hold';
  department: string;
  startDate: string;
  dueDate: string;
  fees: number;
}

export interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}