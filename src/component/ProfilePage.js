import React from 'react'
import { ChevronLeft } from 'lucide-react';

const ProfilePage = ({ setScreen }) => {
    
  return (
     <div className="h-full flex flex-col p-6 md:p-8">
            <div className="flex items-center mb-4">
                <button onClick={() => setScreen('welcome')} className="text-gray-600 hover:text-gray-800 transition-colors">
                    <ChevronLeft size={24} />
                </button>
            </div>
            <h1 className="text-2xl font-bold mb-6">Account Settings</h1>
            <div className="flex items-center mb-6">
                <img
                    src="https://placehold.co/80x80/6c63ff/ffffff?text=MD"
                    alt="marry doe"
                    className="w-20 h-20 rounded-full mr-4"
                />
                <div>
                    <p className="font-bold text-lg">Marry Doe</p>
                    <p className="text-sm text-gray-500">Marry@Gmail.com</p>
                </div>
            </div>
            <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonumy Eirmod Lorem Ipsum Dolor Sit.
            </p>
            <div className="flex-grow border-t border-gray-300"></div>
        </div>
  )
}

export default ProfilePage
