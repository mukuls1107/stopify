// C:/Users/mukul/WebstormProjects/shopify-clone/src/components/Hero2.jsx

import React from 'react';

const Hero2 = () => {
    return (
        // 1. REMOVED `absolute`. This is now a standard section of the page.
        // 2. Added vertical padding (`py-*`) to give it space.
        // 3. Added `relative z-10` to ensure it sits on top of the fixed video background.
        <div className={"relative z-10 bg-black px-6 py-24 sm:py-32 lg:px-8 rounded-2xl font-[Satoshi] "}>
            <div className="  border border-white font-[100] flex flex-col">

            </div>
        </div>
    )
        ;
};

export default Hero2;