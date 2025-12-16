import React from 'react';
import { SERVICE_CATEGORIES } from '../constants';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="bg-brand-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#26C6DA" />
            </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Services</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Comprehensive statutory services from Industry Registrations to Safety Audits and specialized erection works.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-20">
          {SERVICE_CATEGORIES.map((category, index) => {
            const Icon = category.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={category.id} id={category.id} className={`flex flex-col lg:flex-row gap-12 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* Visual Column */}
                <div className="w-full lg:w-1/3">
                   <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-brand-teal sticky top-28">
                      <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-brand-teal mb-6">
                         <Icon size={32} />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-4">{category.title}</h2>
                      <p className="text-slate-600 mb-6">{category.description}</p>
                      <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                         <div className="h-full bg-brand-teal w-1/3"></div>
                      </div>
                   </div>
                </div>

                {/* List Column */}
                <div className="w-full lg:w-2/3">
                  <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100">
                    <h3 className="text-brand-accent font-bold uppercase tracking-wide text-sm mb-6">Detailed Service List</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      {category.items.map((item, i) => (
                        <div key={i} className="flex items-start p-3 hover:bg-slate-50 rounded-lg transition-colors">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center">
                              <Check size={12} className="text-brand-teal" />
                            </div>
                          </div>
                          <p className="ml-3 text-slate-700 font-medium">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;