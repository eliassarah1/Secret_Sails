import React, { useState } from 'react';
import Header from './Header';
import HomePage from './HomePage';
import VideoPage from './VideoPage';

function App() {
    // State for muting
    const [isMuted, setIsMuted] = useState(false);

    // Function to toggle mute state
    const handleMute = () => {
        setIsMuted(!isMuted);
    }

    return (
        <div>
            {/* Header Component */}
            <Header
                isMuted={isMuted}
                handleMute={handleMute}
            />

            {/* HomePage Component */}
            <HomePage />

            {/* VideoPage Component */}
            <VideoPage
                isMuted={isMuted}
            />
        </div>
    );
}

export default App;
