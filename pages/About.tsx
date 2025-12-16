import React from 'react';
import { Target, Users, Shield, Compass } from 'lucide-react';
import { CORE_VALUES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen">
       {/* Hero */}
       <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
         <img 
            src="https://picsum.photos/1200/600?grayscale" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" 
            alt="Background"
         />
         <div className="max-w-7xl mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Who We Are</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
                Vegvisir Solutions is a premier industrial consultancy firm dedicated to simplifying the complex world of statutory compliance.
            </p>
         </div>
       </div>

       {/* Mission & Story */}
       <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-brand-accent font-bold uppercase tracking-wider mb-2">Our Story</h2>
                <h3 className="text-3xl font-heading font-bold text-slate-900 mb-6">Guiding Industry Growth</h3>
                <div className="space-y-6 text-slate-600 leading-relaxed">
                   <p>
                      Established with a vision to streamline industrial operations, Vegvisir Solutions acts as a bridge between businesses and government statutory bodies. We understand that navigating departments like the Pollution Control Board, Factories Department, and Fire Services can be daunting.
                   </p>
                   <p>
                      Our name, <strong>"Vegvisir"</strong>, is derived from an ancient wayfinder symbol, representing our commitment to guiding our clients through rough weather and ensuring they never lose their way in the regulatory landscape.
                   </p>
                   <p>
                      We take pride in our meticulous approach to Industry Registrations, Electrical approvals, and Urban development compliances, ensuring that your business rests on a solid, legal foundation.
                   </p>
                </div>
             </div>
             <div className="relative">
                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-brand-cyan/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-brand-teal/20 rounded-full blur-3xl"></div>
                <div className="grid grid-cols-2 gap-4">
                   <div className="bg-slate-50 p-6 rounded-2xl">
                      <Compass size={40} className="text-brand-teal mb-4"/>
                      <h4 className="font-bold text-lg mb-2">Direction</h4>
                      <p className="text-sm text-slate-500">Providing clear paths for compliance.</p>
                   </div>
                   <div className="bg-slate-50 p-6 rounded-2xl mt-8">
                      <Shield size={40} className="text-brand-teal mb-4"/>
                      <h4 className="font-bold text-lg mb-2">Protection</h4>
                      <p className="text-sm text-slate-500">Safeguarding against legal penalties.</p>
                   </div>
                </div>
             </div>
          </div>
       </section>

       {/* Core Values */}
       <section className="py-20 bg-brand-teal text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
             <h2 className="text-3xl font-heading font-bold mb-12">Our Core Values</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {CORE_VALUES.map((value, idx) => (
                   <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/20 transition">
                      <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                      <p className="text-teal-100">{value.desc}</p>
                   </div>
                ))}
             </div>
          </div>
       </section>
    </div>
  );
};

export default About;