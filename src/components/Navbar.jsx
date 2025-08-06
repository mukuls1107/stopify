import React from 'react';
import logoUrl from '/src/assets/logo.svg';

const Navbar = () => {
    // It's much cleaner to manage navigation links in an array.
    const navLinks = [
        {title: 'Solutions', href: '#'},
        {title: 'Pricing', href: '#'},
        {title: 'Resources', href: '#'},
        {title: 'Enterprise', href: '#'},
        {title: 'What\'s new', href: '#'},
    ];

    return (
        <header
            className="font-[Satoshi] relative z-10 flex items-center justify-between px-8 py-5 text-white border-b border-white/10">
            {/* Left side: Logo and Navigation Links */}
            <div className="flex items-center gap-8 px-8">
                <a href="/">
                    {/* Removed the width attribute to let the height and browser handle scaling */}
                    <img height={180} src={logoUrl} alt="Shopify Logo" className="h-7"/>
                </a>

                <nav className="flex items-center gap-6">
                    {/* Map over the array to create the links */}
                    {navLinks.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            className="text-[16px] relative text-md font-medium tracking-wide
                                       after:content-['']
                                       after:absolute
                                       after:left-0
                                       after:-bottom-1
                                       after:h-[2px]
                                       after:w-0
                                       after:bg-white
                                       after:transition-all
                                       after:duration-300
                                       hover:after:w-full
                                       hover:font-bold"
                        >
                            {link.title}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Right side: Login/Signup buttons */}
            <div className="flex items-center gap-4 text-md font-medium tracking-wide px-8 ">
                <a href="#" className="hover:text-white/80 transition-colors relative text-md font-medium tracking-wide
                                       after:content-['']
                                       after:absolute
                                       after:left-0
                                       after:-bottom-1
                                       after:h-[2px]
                                       after:w-0
                                       after:bg-white
                                       after:transition-all
                                       after:duration-300
                                       hover:after:w-full
                                       hover:font-bold text-[16px]">Log in</a>
                <a href="#"
                   className="text-[16px] px-4 py-2 text-sm font-semibold bg-white text-black rounded-full hover:bg-white/90 transition-colors">
                    Start free trial
                </a>
            </div>
        </header>
    );
};

export default Navbar;