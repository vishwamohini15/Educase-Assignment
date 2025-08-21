import React from 'react';

const LandingPage = ({ setScreen }) => {
    return (
        <div className="w-full min-h-[81vh] flex flex-col justify-end">
            {/* Wrapper jo content ko bottom me rakhega */}
            <div className="p-6 md:p-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Welcome to PopX
                </h1>
                <p className="text-gray-500 mb-8 md:mb-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button
                    onClick={() => setScreen('createAccount')}
                    className="w-full bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300 mb-4"
                >
                    Create Account
                </button>
                <button
                    onClick={() => setScreen('login')}
                    className="w-full bg-purple-200 text-purple-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-purple-300 transition-colors duration-300"
                >
                    Already Registered? Login
                </button>
            </div>
        </div>
    );
};

export default LandingPage;
