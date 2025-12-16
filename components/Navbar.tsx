import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, LogIn, LayoutDashboard, LogOut, User as UserIcon, Users, FolderKanban } from 'lucide-react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${scrolled ? 'bg-brand-teal text-white' : 'bg-white text-brand-teal'} shadow-lg`}>
               {/* Simplified Vegvisir/Compass Icon */}
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"/></svg>
            </div>
            <div className="flex flex-col">
              <span className={`font-heading font-bold text-xl leading-none ${scrolled ? 'text-slate-800' : 'text-slate-900 lg:text-white'}`}>
                VEGVISIR
              </span>
              <span className={`text-xs font-medium tracking-wider ${scrolled ? 'text-brand-teal' : 'text-brand-dark lg:text-teal-100'}`}>
                SOLUTIONS
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-brand-accent'
                      : scrolled
                        ? 'text-slate-600 hover:text-brand-teal'
                        : 'text-slate-800 hover:text-brand-teal'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            <div className="h-6 w-px bg-slate-300 opacity-50"></div>

            {user ? (
              <div className="flex items-center gap-4">
                 {/* Admin specific links */}
                 {user.role === 'admin' && (
                    <>
                      <NavLink to="/clients" className={`p-2 rounded-full transition-colors ${scrolled ? 'text-slate-600 hover:text-brand-teal' : 'text-white hover:text-teal-200'}`} title="Clients">
                        <Users size={20} />
                      </NavLink>
                      <NavLink to="/projects" className={`p-2 rounded-full transition-colors ${scrolled ? 'text-slate-600 hover:text-brand-teal' : 'text-white hover:text-teal-200'}`} title="Projects">
                        <FolderKanban size={20} />
                      </NavLink>
                    </>
                 )}
                 
                 <button 
                    onClick={() => navigate('/dashboard')}
                    className={`flex items-center gap-2 font-medium transition-colors ${scrolled ? 'text-slate-700 hover:text-brand-teal' : 'text-slate-800 hover:text-brand-teal'}`}
                 >
                    <LayoutDashboard size={18} />
                    <span>Dashboard</span>
                 </button>
                 <button 
                    onClick={handleLogout}
                    title="Logout"
                    className={`p-2 rounded-full transition-colors ${scrolled ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' : 'bg-white/20 text-slate-800 hover:bg-slate-200'}`}
                 >
                    <LogOut size={18} />
                 </button>
              </div>
            ) : (
              <NavLink
                to="/login"
                className={`flex items-center gap-2 font-medium transition-colors ${
                  scrolled ? 'text-slate-700 hover:text-brand-teal' : 'text-slate-800 hover:text-brand-teal'
                }`}
              >
                <LogIn size={18} />
                <span>Login</span>
              </NavLink>
            )}

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold transition-all ${
                scrolled
                  ? 'bg-brand-teal text-white hover:bg-brand-dark'
                  : 'bg-white text-brand-teal hover:bg-teal-50'
              }`}
            >
              <Phone size={16} />
              <span className="hidden lg:inline">Call Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-slate-800' : 'text-slate-800 lg:text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out transform origin-top ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 space-y-4 flex flex-col items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-lg font-medium ${
                  isActive ? 'text-brand-teal' : 'text-slate-600'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          
          <div className="w-full border-t border-slate-100 my-2"></div>

          {user ? (
            <>
              <div className="flex items-center gap-2 text-slate-800 font-semibold bg-slate-50 px-4 py-2 rounded-full">
                <UserIcon size={16} className="text-brand-teal"/>
                {user.name}
              </div>
              
              {user.role === 'admin' && (
                <>
                  <NavLink to="/clients" className="text-lg font-medium text-slate-600 hover:text-brand-teal">Clients</NavLink>
                  <NavLink to="/projects" className="text-lg font-medium text-slate-600 hover:text-brand-teal">Projects</NavLink>
                </>
              )}

              <button 
                onClick={() => navigate('/dashboard')}
                className="text-lg font-medium text-slate-600 hover:text-brand-teal"
              >
                Dashboard
              </button>
              <button 
                onClick={handleLogout}
                className="text-lg font-medium text-red-500 hover:text-red-700"
              >
                Logout
              </button>
            </>
          ) : (
             <NavLink
              to="/login"
              className="text-lg font-medium text-slate-600 hover:text-brand-teal flex items-center gap-2"
            >
              <LogIn size={18} /> Login
            </NavLink>
          )}

          <div className="w-full border-t pt-4 mt-4 space-y-3">
             <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center justify-center gap-2 text-slate-600">
                <Phone size={18} className="text-brand-teal"/> {COMPANY_INFO.phone}
             </a>
             <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center justify-center gap-2 text-slate-600">
                <Mail size={18} className="text-brand-teal"/> {COMPANY_INFO.email}
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;