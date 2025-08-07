import React from 'react';
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import bgVideo from '/assets/bg-video.mp4';
import FallBackBG from "./components/Mini-components/FallBackBG.jsx";
import Hero2 from "./components/Hero2.jsx"; // only works if in public

const App = () => {
    return (
        <div className="relative h-screen w-full  ">

            {/* Fallback Component */}
            <div className="absolute top-0 left-0 w-full h-full z-[-2]">
                <FallBackBG/>
            </div>

            {/* Video Background */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            >
                <source src="/assets/bg-video.mp4" type="video/mp4"/>
                {/* Optional: fallback text if browser doesn't support video */}
                Your browser does not support the video tag.
            </video>

            {/* Foreground Content */}
            <Navbar/>
            <Hero/>
            <Hero2/>
        </div>
    );
}

export default App;