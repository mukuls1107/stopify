import React from 'react';
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

const App = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/assets/bg-video.mp4"
                autoPlay
                loop
                muted
            ></video>

            {/* Content Overlay */}
            <Navbar/>
            <Hero/>
        </div>
    );
};

export default App;