import React from 'react';

// Import all the brand images you need
import brand1 from "/assets/brand2.png";
import brand2 from "/assets/brand2.png"; // Assuming you have more images
import brand3 from "/assets/brand2.png";

const Carousel = () => {
    // 1. Manage your carousel content in a data array. This is much cleaner.
    const carouselItems = [
        { image: brand1, span: 'col-span-4' },
        { image: brand2, span: 'col-span-2' },
        { image: brand3, span: 'col-span-4' },
    ];

    return (
        // Using a slightly transparent border for a softer look
        <div className="grid grid-cols-10 p-4 gap-4 w-full h-[80dvh] border border-white/20 my-8 rounded-2xl">
            {/* 2. Map over the array to create the grid items dynamically */}
            {carouselItems.map((item, index) => (
                <div
                    key={index}
                    // 3. The `style` attribute is used to set the dynamic background image URL.
                    style={{ backgroundImage: `url(${item.image})` }}
                    // 4. These classes ensure the image covers the area nicely and adds a subtle hover effect.
                    className={`${item.span} h-full rounded-md bg-cover bg-center transition-transform duration-300 hover:scale-105`}
                >
                    {/* No content is needed inside; the div itself is the image container */}
                </div>
            ))}
        </div>
    );
};

export default Carousel;