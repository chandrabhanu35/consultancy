import React, { useState } from 'react';
import { Plus, Search, Filter, MoreVertical, Building2, Phone, Mail, FileText } from 'lucide-react';
import { Client } from '../types';

// Mock Data
const MOCK_CLIENTS: Client[] = [
  {
    id: '1',
    companyName: 'Apex Industries Ltd',
    gstin: '36ABCDE1234F1Z5',
    pan: 'ABCDE1234F',
    contactPerson: 'Rajesh Kumar',
    phone: '+91 9876543210',
    email: 'contact@apexind.com',
    address: 'Plot 45, Jeedimetla, Hyderabad',
    status: 'active'
  },
  {
    id: '2',
    companyName: 'Green Pharma Sciences',
    gstin: '36XYZDE1234F1Z8',
    pan: 'XYZDE1234F',
    contactPerson: 'Dr. Suresh Reddy',
    phone: '+91 9876543211',
    email: 'info@greenpharma.com',
    address: 'Pharma City, Hyderabad',
    status: 'active'
  },
  {
    id: '3',
    companyName: 'TechFlow Systems',
    gstin: '36PQRDE1234F1Z2',
    pan: 'PQRDE1234F',
    contactPerson: 'Anita Rao',
    phone: '+91 9876543212',
    email: 'admin@techflow.com',
    address: 'Hitech City, Hyderabad',
    status: 'active'
  },
  {
    id: '4',
    companyName: 'Ravi Steel Works',
    gstin: '36LMNOD1234F1Z9',
    pan: 'LMNOD1234F',
    contactPerson: 'Ravi Shankar',
    phone: '+91 9876543213',
    email: 'ravi@ravisteels.com',
    address: 'Autonagar, Vijayawada',
    status: 'inactive'
  }
];

const Clients: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [clients] = useState<Client[]>(MOCK_CLIENTS);

  const filteredClients = clients.filter(client => 
    client.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.gstin.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 min-h-screen bg-slate-50 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold text-slate-900">Client Management</h1>
            <p className="text-slate-500">Manage your industrial client database</p>
          </div>
          <button className="flex items-center gap-2 bg-brand-teal text-white px-6 py-3 rounded-lg font-bold hover:bg-brand-dark transition shadow-lg">
            <Plus size={20} />
            <span>Add New Client</span>
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-6 flex flex-col md:flex-row gap-4">
           <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search clients by name, GSTIN..." 
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-teal"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
           </div>
           <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600 font-medium">
              <Filter size={18} />
              <span>Filter</span>
           </button>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {filteredClients.map((client) => (
              <div key={client.id} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition group">
                 <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                       <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center text-brand-teal">
                          <Building2 size={24} />
                       </div>
                       <div>
                          <h3 className="font-bold text-slate-900 leading-tight group-hover:text-brand-teal transition">{client.companyName}</h3>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${client.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
                             {client.status === 'active' ? 'Active' : 'Inactive'}
                          </span>
                       </div>
                    </div>
                    <button className="text-slate-400 hover:text-slate-600">
                       <MoreVertical size={20} />
                    </button>
                 </div>

                 <div className="space-y-3 text-sm text-slate-600 mb-6">
                    <div className="flex items-center gap-3">
                       <FileText size={16} className="text-slate-400" />
                       <span className="font-mono bg-slate-50 px-2 py-0.5 rounded">{client.gstin}</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <Phone size={16} className="text-slate-400" />
                       <span>{client.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <Mail size={16} className="text-slate-400" />
                       <span className="truncate">{client.email}</span>
                    </div>
                 </div>

                 <div className="pt-4 border-t border-slate-100 flex gap-3">
                    <button className="flex-1 py-2 text-sm font-semibold text-brand-teal bg-teal-50 rounded-lg hover:bg-brand-teal hover:text-white transition">
                       View Profile
                    </button>
                    <button className="flex-1 py-2 text-sm font-semibold text-slate-600 bg-slate-50 rounded-lg hover:bg-slate-100 transition">
                       Projects
                    </button>
                 </div>
              </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;