import React from 'react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';

const Pagination = ({ screen, setScreen }) => {
    const pages = ['welcome', 'login', 'createAccount', 'profile'];
    const currentIndex = pages.indexOf(screen);

    const navigateToNext = () => {
        if (currentIndex < pages.length - 1) {
            setScreen(pages[currentIndex + 1]);
        }
    };

    const navigateToPrev = () => {
        if (currentIndex > 0) {
            setScreen(pages[currentIndex - 1]);
        }
    };

    return (
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white flex justify-center items-center text-gray-500">
            <button
                onClick={() => setScreen('welcome')}
                className="p-2 text-2xl hover:text-purple-600 transition-colors"
                aria-label="Home"
            >
                <Home size={24} />
            </button>
            <button
                onClick={navigateToPrev}
                className={`p-2 text-2xl ${currentIndex === 0 ? 'cursor-not-allowed opacity-50' : 'hover:text-purple-600 transition-colors'}`}
                disabled={currentIndex === 0}
                aria-label="Previous"
            >
                <ChevronLeft size={24} />
            </button>
            <span className="text-base">
                {currentIndex + 1} of {pages.length}
            </span>
            <button
                onClick={navigateToNext}
                className={`p-2 text-2xl ${currentIndex === pages.length - 1 ? 'cursor-not-allowed opacity-50' : 'hover:text-purple-600 transition-colors'}`}
                disabled={currentIndex === pages.length - 1}
                aria-label="Next"
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
};

export default Pagination;
