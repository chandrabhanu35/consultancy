import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceCategory } from '../types';

interface ServiceCardProps {
  service: ServiceCategory;
  summaryOnly?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, summaryOnly = false }) => {
  const Icon = service.icon;

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group relative overflow-hidden h-full flex flex-col">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
      
      <div className="relative z-10 flex-grow">
        <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center text-brand-teal mb-6 group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300">
          <Icon size={28} strokeWidth={1.5} />
        </div>
        
        <h3 className="text-xl font-heading font-bold text-slate-800 mb-3 group-hover:text-brand-teal transition-colors">
          {service.title}
        </h3>
        
        <p className="text-slate-500 mb-6 leading-relaxed">
          {service.description}
        </p>

        {!summaryOnly && (
           <ul className="space-y-2 mb-6">
              {service.items.slice(0, 5).map((item, index) => (
                  <li key={index} className="flex items-start text-sm text-slate-600">
                      <span className="mr-2 text-brand-teal mt-1">•</span>
                      {item}
                  </li>
              ))}
              {service.items.length > 5 && (
                  <li className="text-xs text-brand-teal font-semibold italic pl-3">
                      + {service.items.length - 5} more items
                  </li>
              )}
           </ul>
        )}
      </div>

      <div className="relative z-10 mt-auto">
        <Link 
            to="/services" 
            className="inline-flex items-center text-sm font-bold text-brand-teal hover:text-brand-dark transition-colors"
        >
            View Details <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;