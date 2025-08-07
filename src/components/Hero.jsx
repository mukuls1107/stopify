// C:/Users/mukul/WebstormProjects/shopify-clone/src/components/Hero.jsx

import React from 'react';

const Hero = () => {
    return (
        // 1. Use `min-h-screen` to fill the screen but allow it to grow if needed.
        // 2. Use responsive padding (`px-*`) for better control than `left-[5%]`.
        <div className={"font-[Satoshi] flex flex-col items-start justify-center gap-8 px-6 md:px-12 lg:px-24 min-h-screen"}>
            <div className="lg:w-3/5">
                <h1 className={"text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none text-white"}>Be the next one to watch</h1>
                <h3 className={"mt-6 text-lg md:text-xl lg:text-2xl text-white/90"}>Dream big, build fast, and grow far on Shopify.</h3>
                {/* 3. Improved button styling and hover effect */}
                <div className={"mt-8 h-fit w-fit bg-white cursor-pointer transition-transform duration-150 ease-in-out hover:bg-gray-200 hover:scale-105 px-6 py-3 rounded-full"}>
                    <p className="font-medium">Start for free</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;