import React from "react";
import GradientSpan from "./Mini-components/GradientSpan.jsx";
import Carousel from "./Mini-components/Carousel.jsx";

const Hero2 = () => {
    return (
        <div className="relative z-10 bg-black px-6 py-24 font-[Satoshi] sm:py-32 lg:px-8 ">
            <div className="mx-auto max-w-5xl text-balance text-white flex flex-col items-start gap-8">
                <h1 className="text-5xl font-bold md:text-6xl lg:text-[70px]">
                    The one commerce platform behind it all
                </h1>
                <h3 className="text-3xl font-light leading-tight md:text-4xl lg:text-[55px]">
                    <GradientSpan>Sell online and in person.</GradientSpan>
                    <GradientSpan> Sell locally and globally.</GradientSpan>
                    {' '}Sell direct and wholesale.{' '}
                    <GradientSpan>Sell on desktop and mobile.</GradientSpan>
                </h3>
            </div>
            <Carousel/>
        </div>
    );
};

export default Hero2;