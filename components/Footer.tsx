import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-teal flex items-center justify-center text-white">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"/></svg>
                </div>
                <h3 className="text-2xl font-heading font-bold">Vegvisir</h3>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Your trusted partner for all industrial statutory compliances, approvals, and registrations in Telangana & Andhra Pradesh.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-brand-cyan transition"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-brand-cyan transition"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-brand-cyan transition"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-slate-700 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-400 hover:text-brand-teal transition">Home</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-brand-teal transition">Who We Are</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-brand-teal transition">Our Services</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-brand-teal transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-slate-700 pb-2 inline-block">Core Services</h4>
            <ul className="space-y-3">
              <li className="text-slate-400">Industry Registration</li>
              <li className="text-slate-400">Factory Approvals</li>
              <li className="text-slate-400">Pollution Control Board</li>
              <li className="text-slate-400">Fire Safety NOC</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-slate-700 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="text-brand-teal flex-shrink-0 mt-1" size={18} />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="text-brand-teal flex-shrink-0" size={18} />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition">{COMPANY_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="text-brand-teal flex-shrink-0" size={18} />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition">{COMPANY_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Vegvisir Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;