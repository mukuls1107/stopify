
import React from 'react';
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Hero2 from "./components/Hero2.jsx";
import VideoPlayer from "./components/Mini-components/VideoPlayer.jsx";

const App = () => {
    return (
        <main className="bg-black">
            {/* 2. The VideoPlayer is fixed to the background and won't affect layout */}
            <VideoPlayer/>

            {/* 3. A main content wrapper to ensure content is stacked correctly above the video */}
            <section className="relative z-10">
                <Navbar/>
                <Hero/>
            </section>

            {/* 4. Hero2 is now a standard section that flows naturally after the main content */}
            <Hero2/>
        </main>
    );
}

export default App;