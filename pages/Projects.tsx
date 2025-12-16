import React, { useState } from 'react';
import { Plus, Search, Filter, MoreVertical, FileText, Calendar, IndianRupee, AlertCircle, CheckCircle2, Clock } from 'lucide-react';
import { Project } from '../types';

// Mock Data based on your SQL schema requirements
const MOCK_PROJECTS: (Project & { clientName: string })[] = [
  {
    id: 'PRJ-2023-001',
    clientId: '1',
    clientName: 'Apex Industries Ltd',
    serviceType: 'Factory License (CFO)',
    department: 'Factories Dept',
    status: 'in_progress',
    startDate: '2023-10-01',
    dueDate: '2023-11-15',
    fees: 45000
  },
  {
    id: 'PRJ-2023-002',
    clientId: '2',
    clientName: 'Green Pharma Sciences',
    serviceType: 'Consent for Establishment (CFE)',
    department: 'Pollution Control Board',
    status: 'pending',
    startDate: '2023-10-10',
    dueDate: '2023-11-30',
    fees: 75000
  },
  {
    id: 'PRJ-2023-003',
    clientId: '3',
    clientName: 'TechFlow Systems',
    serviceType: 'Fire NOC Renewal',
    department: 'Fire Services',
    status: 'completed',
    startDate: '2023-09-15',
    dueDate: '2023-10-15',
    fees: 25000
  },
  {
    id: 'PRJ-2023-004',
    clientId: '4',
    clientName: 'Ravi Steel Works',
    serviceType: 'Udyam Registration',
    department: 'Industries Dept',
    status: 'on_hold',
    startDate: '2023-10-05',
    dueDate: '2023-10-20',
    fees: 5000
  }
];

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredProjects = MOCK_PROJECTS.filter(project => {
    const matchesSearch = 
      project.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.serviceType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700 border-green-200';
      case 'in_progress': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'pending': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'on_hold': return 'bg-slate-100 text-slate-600 border-slate-200';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle2 size={14} />;
      case 'in_progress': return <Clock size={14} />;
      case 'pending': return <AlertCircle size={14} />;
      case 'on_hold': return <Clock size={14} />;
      default: return null;
    }
  };

  const formatStatus = (status: string) => {
    return status.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold text-slate-900">Projects</h1>
            <p className="text-slate-500">Track application status and deliverables</p>
          </div>
          <button className="flex items-center gap-2 bg-brand-cyan text-white px-6 py-3 rounded-lg font-bold hover:bg-cyan-600 transition shadow-lg">
            <Plus size={20} />
            <span>New Project</span>
          </button>
        </div>

        {/* Controls */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-6 flex flex-col md:flex-row gap-4 items-center">
           <div className="relative flex-grow w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search projects by client, service, ID..." 
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-teal"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
           </div>
           
           <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              {['all', 'in_progress', 'pending', 'completed', 'on_hold'].map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    statusFilter === status 
                      ? 'bg-brand-teal text-white' 
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {status === 'all' ? 'All Projects' : formatStatus(status)}
                </button>
              ))}
           </div>
        </div>

        {/* Projects List */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
           <div className="overflow-x-auto">
             <table className="w-full text-left border-collapse">
               <thead>
                 <tr className="bg-slate-50 text-slate-500 text-sm border-b border-slate-100">
                   <th className="p-4 font-semibold">Project ID / Service</th>
                   <th className="p-4 font-semibold">Client Name</th>
                   <th className="p-4 font-semibold">Department</th>
                   <th className="p-4 font-semibold">Timeline</th>
                   <th className="p-4 font-semibold">Fees</th>
                   <th className="p-4 font-semibold">Status</th>
                   <th className="p-4 font-semibold">Actions</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                 {filteredProjects.map((project) => (
                   <tr key={project.id} className="hover:bg-slate-50 transition group">
                     <td className="p-4">
                       <div className="flex items-start gap-3">
                         <div className="p-2 bg-teal-50 text-brand-teal rounded-lg">
                            <FileText size={20} />
                         </div>
                         <div>
                            <span className="block text-xs font-mono text-slate-500 mb-0.5">{project.id}</span>
                            <span className="font-bold text-slate-800 text-sm">{project.serviceType}</span>
                         </div>
                       </div>
                     </td>
                     <td className="p-4 font-medium text-slate-700">{project.clientName}</td>
                     <td className="p-4 text-sm text-slate-600">{project.department}</td>
                     <td className="p-4">
                        <div className="flex flex-col gap-1 text-xs text-slate-500">
                           <div className="flex items-center gap-1">
                              <span className="w-12">Start:</span>
                              <span className="font-medium">{project.startDate}</span>
                           </div>
                           <div className={`flex items-center gap-1 ${new Date(project.dueDate) < new Date() && project.status !== 'completed' ? 'text-red-500 font-bold' : ''}`}>
                              <span className="w-12">Due:</span>
                              <span className="font-medium">{project.dueDate}</span>
                           </div>
                        </div>
                     </td>
                     <td className="p-4 font-medium text-slate-700">
                        <div className="flex items-center">
                           <IndianRupee size={14} />
                           {project.fees.toLocaleString()}
                        </div>
                     </td>
                     <td className="p-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(project.status)}`}>
                           {getStatusIcon(project.status)}
                           {formatStatus(project.status)}
                        </span>
                     </td>
                     <td className="p-4 text-right">
                        <button className="text-slate-400 hover:text-brand-teal p-2 rounded-full hover:bg-teal-50 transition">
                           <MoreVertical size={18} />
                        </button>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
           
           {filteredProjects.length === 0 && (
              <div className="p-12 text-center text-slate-400">
                 <p>No projects found matching your criteria.</p>
              </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default Projects;