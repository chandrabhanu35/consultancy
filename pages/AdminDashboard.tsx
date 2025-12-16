import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Users, FileText, CheckCircle, TrendingUp, Bell, Clock, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    { title: 'Total Clients', value: '124', icon: Users, color: 'bg-blue-500' },
    { title: 'Active Projects', value: '32', icon: FileText, color: 'bg-brand-teal' },
    { title: 'Overdue Tasks', value: '5', icon: AlertTriangle, color: 'bg-red-500' },
    { title: 'Upcoming Renewals', value: '12', icon: Clock, color: 'bg-orange-500' },
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold text-slate-900">Admin Dashboard</h1>
            <p className="text-slate-500">Overview of your consultancy operations</p>
          </div>
          <button className="flex items-center gap-2 bg-white p-2 rounded-lg border border-slate-200 text-slate-600 hover:text-brand-teal transition shadow-sm">
            <Bell size={20} />
            <span className="text-sm font-semibold">Notifications</span>
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-lg ${stat.color} bg-opacity-10 flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color.replace('bg-', '')}`} />
                  {/* Note: The 'text-' logic depends on safe-list or full names. In this environment, dynamic might miss. Hardcoding common ones if needed, but assuming standard palette matches */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Applications */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h2 className="font-bold text-lg text-slate-800">Recent Projects</h2>
              <button className="text-sm text-brand-teal font-semibold hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-500">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Client</th>
                    <th className="px-6 py-4 font-semibold">Service Type</th>
                    <th className="px-6 py-4 font-semibold">Department</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { client: 'Apex Industries', service: 'Factory License (CFO)', dept: 'Factories Dept', status: 'In Progress' },
                    { client: 'Green Pharma Ltd', service: 'Pollution Control (CFE)', dept: 'TSPCB', status: 'Pending' },
                    { client: 'Tech Park Zone', service: 'Fire NOC', dept: 'Fire Dept', status: 'Completed' },
                    { client: 'Ravi Steels', service: 'Udyam Registration', dept: 'Industries', status: 'In Progress' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition">
                      <td className="px-6 py-4 font-medium text-slate-800">{row.client}</td>
                      <td className="px-6 py-4 text-slate-600">{row.service}</td>
                      <td className="px-6 py-4 text-slate-500">{row.dept}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          row.status === 'Completed' ? 'bg-green-100 text-green-700' :
                          row.status === 'Pending' ? 'bg-orange-100 text-orange-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
            <h2 className="font-bold text-lg text-slate-800 mb-6">Quick Actions</h2>
            <div className="space-y-3">
              <Link to="/clients" className="w-full py-3 px-4 bg-slate-50 hover:bg-slate-100 rounded-lg text-left flex items-center gap-3 transition group">
                <div className="w-8 h-8 rounded bg-brand-teal text-white flex items-center justify-center">
                  <Users size={16} />
                </div>
                <span className="font-medium text-slate-700 group-hover:text-brand-dark">Manage Clients</span>
              </Link>
              <button className="w-full py-3 px-4 bg-slate-50 hover:bg-slate-100 rounded-lg text-left flex items-center gap-3 transition group">
                <div className="w-8 h-8 rounded bg-brand-cyan text-white flex items-center justify-center">
                  <FileText size={16} />
                </div>
                <span className="font-medium text-slate-700 group-hover:text-brand-dark">New Project</span>
              </button>
              <button className="w-full py-3 px-4 bg-slate-50 hover:bg-slate-100 rounded-lg text-left flex items-center gap-3 transition group">
                <div className="w-8 h-8 rounded bg-orange-500 text-white flex items-center justify-center">
                  <Clock size={16} />
                </div>
                <span className="font-medium text-slate-700 group-hover:text-brand-dark">Check Renewals</span>
              </button>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-100">
               <h3 className="text-sm font-semibold text-slate-500 uppercase mb-4">Upcoming Renewals (30 Days)</h3>
               <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                      <AlertTriangle className="text-red-500 mt-0.5" size={16} />
                      <div>
                          <p className="text-sm font-bold text-slate-800">CFO Renewal</p>
                          <p className="text-xs text-slate-500">Apex Industries • Expires 15 Oct</p>
                      </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                      <Clock className="text-orange-500 mt-0.5" size={16} />
                      <div>
                          <p className="text-sm font-bold text-slate-800">Factory License</p>
                          <p className="text-xs text-slate-500">Ravi Steels • Expires 22 Oct</p>
                      </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;