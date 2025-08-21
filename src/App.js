import React, { useState } from 'react';
import './App.css';
import CreateAccountPage from './component/CreateAccountPage';
import LandingPage from './component/LandingPage';
import { LoginPage } from './component/LoginPage';
import Pagination from './component/Pagination';
import ProfilePage from './component/ProfilePage';

const App = () => {
    const [screen, setScreen] = useState('welcome');

    // Function to render the correct screen based on the 'screen' state
    const renderScreen = () => {
        switch (screen) {
            case 'login':
                return <LoginPage setScreen={setScreen} />;
            case 'createAccount':
                return <CreateAccountPage setScreen={setScreen} />;
            case 'profile':
                return <ProfilePage setScreen={setScreen} />;
            default: // Handles 'welcome' and any other state
                return <LandingPage setScreen={setScreen} />;
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center font-sans ">
            {/* Main container with fixed width and height for a consistent mobile-like view */}
            <div className="relative w-full max-w-md bg-white shadow-xl rounded-2xl md:p-8 overflow-hidden min-h-[95vh] flex flex-col">
                {/* Dynamically rendered screen */}
                {renderScreen()}

                {/* Pagination and Navigation Bar */}
                <Pagination screen={screen} setScreen={setScreen} />
            </div>
        </div>
    );
};

export default App;
