import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Calendar, ClipboardList, MapPin, Upload } from 'lucide-react';

const EmployeeDashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="pt-24 min-h-screen bg-slate-50 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-bold text-slate-900">Employee Portal</h1>
          <p className="text-slate-500">Hello, {user?.name}. You have 3 pending tasks today.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Task List */}
          <div className="lg:col-span-2 space-y-6">
             <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                <div className="flex items-center gap-2 mb-6">
                   <ClipboardList className="text-brand-teal" />
                   <h2 className="text-xl font-bold text-slate-800">My Assigned Tasks</h2>
                </div>

                <div className="space-y-4">
                   {/* Task Item */}
                   <div className="p-4 border border-slate-100 rounded-lg hover:border-brand-teal transition bg-slate-50 group">
                      <div className="flex justify-between items-start mb-2">
                         <h3 className="font-bold text-slate-800 group-hover:text-brand-teal transition">Site Inspection - Apex Industries</h3>
                         <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded font-semibold">High Priority</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">Verify structural stability improvements as per previous audit report.</p>
                      <div className="flex items-center text-xs text-slate-500 gap-4">
                         <div className="flex items-center gap-1"><Calendar size={12}/> Due: Oct 26</div>
                         <div className="flex items-center gap-1"><MapPin size={12}/> Hyderabad</div>
                      </div>
                      <div className="mt-3 flex gap-2">
                         <button className="text-xs bg-brand-teal text-white px-3 py-1.5 rounded hover:bg-brand-dark transition">Start Task</button>
                         <button className="text-xs bg-white border border-slate-300 text-slate-600 px-3 py-1.5 rounded hover:bg-slate-50 transition">View Details</button>
                      </div>
                   </div>

                   {/* Task Item */}
                   <div className="p-4 border border-slate-100 rounded-lg hover:border-brand-teal transition bg-white group">
                      <div className="flex justify-between items-start mb-2">
                         <h3 className="font-bold text-slate-800 group-hover:text-brand-teal transition">Document Collection - Green Pharma</h3>
                         <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded font-semibold">Medium</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">Collect original CFE documents for submission to Pollution Board.</p>
                      <div className="flex items-center text-xs text-slate-500 gap-4">
                         <div className="flex items-center gap-1"><Calendar size={12}/> Due: Oct 27</div>
                         <div className="flex items-center gap-1"><MapPin size={12}/> Jeedimetla</div>
                      </div>
                      <div className="mt-3 flex gap-2">
                         <button className="text-xs bg-white border border-brand-teal text-brand-teal px-3 py-1.5 rounded hover:bg-teal-50 transition">Mark Complete</button>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
             <div className="bg-brand-dark text-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-lg mb-4">Quick Upload</h3>
                <p className="text-teal-100 text-sm mb-6">Upload site photos or compliance documents directly from the field.</p>
                <button className="w-full py-3 bg-white text-brand-dark font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-teal-50 transition">
                   <Upload size={18} /> Upload File
                </button>
             </div>

             <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                <h3 className="font-bold text-lg text-slate-800 mb-4">Notice Board</h3>
                <ul className="space-y-3 text-sm">
                   <li className="flex gap-2 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5 flex-shrink-0"></div>
                      <span className="text-slate-600">Updated TSPCB regulations for pharma sector active from Nov 1st.</span>
                   </li>
                   <li className="flex gap-2 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5 flex-shrink-0"></div>
                      <span className="text-slate-600">Office closed on Tuesday for Dussehra.</span>
                   </li>
                </ul>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;