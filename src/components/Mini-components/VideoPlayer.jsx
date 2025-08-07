
import React from 'react';
import bgVideo from '/assets/bg-video.mp4';

const VideoPlayer = () => {
    return (
        <video
            className="fixed top-0 left-0 w-full h-full object-cover z-[10]"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
        >
            <source src={bgVideo} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoPlayer;