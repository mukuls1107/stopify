import React, { useState, useEffect } from 'react';
import logoUrl from '/src/assets/logo.svg';

const Navbar = () => {
    // State to manage whether the mobile menu is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Data for navigation links for easier management
    const navLinks = [
        { title: 'Solutions', href: '#' },
        { title: 'Pricing', href: '#' },
        { title: 'Resources', href: '#' },
        { title: 'Enterprise', href: '#' },
        { title: 'What\'s new', href: '#' },
    ];

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const NavLink = ({ href, children }) => (
        <a
            href={href}
            className="relative sm:text-[12px] lg:text-xl font-medium tracking-wide
                       after:content-[''] after:absolute after:left-0 after:-bottom-1
                       after:h-[2px] after:w-0 after:bg-white
                       after:transition-all after:duration-300
                       hover:after:w-full"
        >
            {children}
        </a>
    );

    return (
        <>
            <header className="font-[Satoshi] relative z-50 flex items-center justify-between px-4 sm:px-8 py-5 text-white border-b border-white/10">
                {/* left  */}
                <div className="flex items-center gap-8">
                    <a href="/">
                        <img src={logoUrl} alt="Shopify Logo" className="h-7" />
                    </a>
                    <nav className="hidden md:flex items-center gap-6 ">
                        {navLinks.map((link) => (
                            <NavLink key={link.title} href={link.href}>
                                {link.title}
                            </NavLink>
                        ))}
                    </nav>
                </div>

                {/* right  */}
                <div className="hidden md:flex items-center gap-4">
                    <NavLink href="#">Log in</NavLink>
                    <a href="#" className="px-4 py-2 text-sm font-semibold bg-white text-black rounded-full hover:bg-white/90 transition-colors">
                        Start free trial
                    </a>
                </div>

                {/* menu buttong*/}
                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </header>

            {/* overlay mobile devie*/}
            <div
                className={`md:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-opacity duration-300
                           ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                <div className="font-[Satoshi] flex flex-col items-center justify-center h-full gap-8 text-white text-xl">
                    {navLinks.map((link) => (
                        <a key={link.title} href={link.href} onClick={() => setIsMenuOpen(false)}>
                            {link.title}
                        </a>
                    ))}
                    <hr className="w-2/3 border-white/20 my-4" />
                    <a href="#" onClick={() => setIsMenuOpen(false)}>Log in</a>
                    <a href="#" className="px-6 py-3 font-semibold bg-white text-black rounded-full">
                        Start free trial
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;