import React from 'react';

const Hero = () => {
    return (
        <div className={"font-[Satoshi] relative z-10 left-[5%] text-2xl flex flex-col items-start gap-8  justify-center p-4 lg:w-2/5 h-screen"}>
            <h1 className={"md:text-[54px] lg:text-[96px] tracking-tight leading-none text-white"}>Be the next one to watch</h1>
            <h3 className={"md:text-[18px] lg:text-[26px] text-white"}>Dream big, build fast, and grow far on Shopify.</h3>
            <div className={"h-fit bg-white cursor-pointer transition-normal duration-150 ease-in-out hover:bg-gray-200 hover:scale-[110%]   px-6 py-2 rounded-xl"}>
                <p>Start for free </p>
            </div>
        </div>
    );
};

export default Hero;