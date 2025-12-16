import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-heading font-bold text-slate-900 mb-4">Get in Touch</h1>
          <p className="text-slate-600 max-w-xl mx-auto">
            Ready to streamline your industrial compliance? Reach out to us today for a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Card */}
          <div className="bg-brand-teal rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
             {/* Decorative Circles */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16"></div>
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-cyan/20 rounded-full -ml-10 -mb-10"></div>

             <h2 className="text-2xl font-bold mb-8 relative z-10">Contact Information</h2>
             
             <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Phone size={20} />
                   </div>
                   <div>
                      <p className="text-teal-200 text-sm font-semibold uppercase tracking-wider">Phone</p>
                      <a href={`tel:${COMPANY_INFO.phone}`} className="text-xl font-medium hover:text-white transition">{COMPANY_INFO.phone}</a>
                   </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Mail size={20} />
                   </div>
                   <div>
                      <p className="text-teal-200 text-sm font-semibold uppercase tracking-wider">Email</p>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-xl font-medium hover:text-white transition">{COMPANY_INFO.email}</a>
                   </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} />
                   </div>
                   <div>
                      <p className="text-teal-200 text-sm font-semibold uppercase tracking-wider">Office</p>
                      <p className="text-lg leading-snug">{COMPANY_INFO.address}</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Simple Form (Visual Only for this demo) */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100">
             <h2 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h2>
             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition" placeholder="Your Name" />
                   </div>
                   <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition" placeholder="Your Phone" />
                   </div>
                </div>
                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                   <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition bg-white">
                      <option>General Inquiry</option>
                      <option>Industry Registration</option>
                      <option>Pollution Control Board</option>
                      <option>Factory License</option>
                      <option>Other</option>
                   </select>
                </div>
                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                   <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition" placeholder="How can we help you?"></textarea>
                </div>
                <button className="w-full bg-brand-dark text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition shadow-lg">
                   Send Message
                </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;