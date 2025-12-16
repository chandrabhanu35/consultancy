import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICE_CATEGORIES, COMPANY_INFO } from '../constants';
import ServiceCard from '../components/ServiceCard';
import { SideWave } from '../components/WaveBackground';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
        <SideWave />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-brand-teal font-semibold text-sm tracking-wide">
                Premier Industrial Consultants
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 leading-tight">
                Navigating Complex <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-cyan">
                  Regulatory Landscapes
                </span>
              </h1>
              <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                From establishment to operation, we guide your business through statutory compliances, factories department approvals, and pollution control clearances.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="px-8 py-4 rounded-full bg-brand-teal text-white font-bold hover:bg-brand-dark transition-all shadow-lg hover:shadow-teal-500/30 flex items-center gap-2"
                >
                  Our Services <ArrowRight size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-full bg-white text-slate-800 border-2 border-slate-200 font-bold hover:border-brand-teal hover:text-brand-teal transition-all"
                >
                  Contact Us
                </Link>
              </div>

              <div className="pt-8 flex items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-brand-teal" />
                    <span>Certified Experts</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-brand-teal" />
                    <span>Fast Approvals</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-brand-teal" />
                    <span>End-to-End Support</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
               {/* Abstract visual representation */}
               <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src="https://picsum.photos/800/600?grayscale" 
                    alt="Industrial Plant" 
                    className="w-full h-auto object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-teal/20 mix-blend-multiply"></div>
               </div>
               {/* Floating Badge */}
               <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs animate-bounce-slow">
                  <p className="font-bold text-brand-dark text-lg mb-1">100+ Projects</p>
                  <p className="text-slate-500 text-sm">Succesfully cleared across Telangana & Andhra Pradesh.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-2">What We Do</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">Comprehensive Statutory Services</h3>
            <div className="w-20 h-1 bg-brand-teal mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICE_CATEGORIES.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} summaryOnly={true} />
            ))}
          </div>
          
          <div className="text-center mt-12">
             <Link to="/services" className="inline-flex items-center font-bold text-brand-teal hover:underline text-lg">
                View All Services <ArrowRight size={20} className="ml-2" />
             </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-brand-dark rounded-3xl overflow-hidden shadow-2xl text-white relative">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                 <div className="p-12 lg:p-20 flex flex-col justify-center relative z-10">
                    <h3 className="text-3xl font-heading font-bold mb-6">Why Choose Vegvisir?</h3>
                    <p className="text-teal-100 text-lg leading-relaxed mb-8">
                       The name "Vegvisir" is an ancient symbol of guidance and protection. True to our name, we help industries find their way through the storms of regulatory compliance, ensuring a safe passage to operational success.
                    </p>
                    <ul className="space-y-4 mb-8">
                       <li className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-brand-teal flex items-center justify-center"><CheckCircle2 size={18}/></div>
                          <span>Single window for all industrial approvals</span>
                       </li>
                       <li className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-brand-teal flex items-center justify-center"><CheckCircle2 size={18}/></div>
                          <span>Technical expertise in Fire, Pollution & Safety</span>
                       </li>
                    </ul>
                    <Link to="/about" className="inline-block bg-white text-brand-dark px-8 py-3 rounded-lg font-bold hover:bg-teal-50 transition w-max">
                       Learn More About Us
                    </Link>
                 </div>
                 <div className="h-64 lg:h-auto relative">
                    <img 
                       src="https://picsum.photos/800/800" 
                       className="w-full h-full object-cover opacity-80" 
                       alt="Industrial Meeting"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent lg:bg-gradient-to-l"></div>
                 </div>
              </div>
           </div>
        </div>
      </section>
      
      {/* CTA Strip */}
      <section className="py-16 bg-brand-teal">
         <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
            <p className="text-teal-100 mb-8 max-w-2xl mx-auto">Contact us today for a consultation on your industry registrations and compliance requirements.</p>
            <a href={`tel:${COMPANY_INFO.phone}`} className="inline-block bg-brand-accent px-10 py-4 rounded-full font-bold shadow-lg hover:bg-orange-600 transition transform hover:-translate-y-1">
               Call {COMPANY_INFO.phone}
            </a>
         </div>
      </section>
    </div>
  );
};

export default Home;