//! Footer - Shows logo and copyright only

import Logo from '../assests/Logo.png'; 

const Footer = () => {
  return (
    <footer className="bg-blue-50 text-black py-4 mt-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex flex-row sm:flex-row items-center justify-between">
        
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <img src={Logo} alt="Logo" className="h-8 w-8 sm:h-10 sm:w-10" />
        </div>

        {/* Right: Copyright */}
        <div className="text-xs text-center sm:text-right w-full sm:w-auto">
          © {new Date().getFullYear()} Expense Tracker. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
