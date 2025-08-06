import React from 'react';
// Corrected: Use a default import to get the URL of the asset from Vite.
import logoUrl from '/src/assets/logo.svg';

const Navbar = () => {
    return (
        // Added padding, flexbox for alignment, and a subtle bottom border.
        <header
            className="relative z-10 flex items-center justify-between px-8 py-5 text-white border-b border-white/10">
            {/* Logo */}
            <a href="/">
                <img src={logoUrl} alt="Shopify Logo" className="h-7"/>
            </a>

            {/* Placeholder for Login/Signup buttons */}
            <div className="flex items-center gap-4">
                <a href="#" className="text-sm font-medium hover:text-white/80 transition-colors">Log in</a>
                <a href="#"
                   className="px-4 py-2 text-sm font-semibold bg-white text-black rounded-full hover:bg-white/90 transition-colors">
                    Start free trial
                </a>
            </div>
        </header>
    );
};

export default Navbar;