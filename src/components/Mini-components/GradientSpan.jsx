import React from 'react';

// 1. A small, reusable component for the gradient hover effect.
//    This keeps the main JSX clean and follows the DRY (Don't Repeat Yourself) principle.
const GradientSpan = ({children}) => (<span
    className={`
      text-white
      cursor-pointer 
      transition-colors duration-300 
      hover:bg-gradient-to-r
      hover:from-blue-400 
      hover:via-pink-500 
      hover:to-purple-600
      hover:bg-clip-text    
      hover:text-transparent
    `}
>
        {children}
    </span>);
export default GradientSpan;