import React from 'react'
import { ChevronLeft } from 'lucide-react';

export const LoginPage = ({ setScreen }) => {
  return (
    <div className="h-full flex flex-col p-6 md:p-8">
      {/* Back button */}
      <div className="flex items-center mb-4">
        <button 
          onClick={() => setScreen('welcome')} 
          className="text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-2">
        Sign in to your PopX account
      </h1>
      <p className="text-gray-500 mb-6 md:mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      {/* Form */}
      <div className="space-y-4">
        <div>
          <label 
            htmlFor="email" 
            className="text-sm font-semibold text-blue-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            className="mt-1 w-full p-3 rounded-lg border border-gray-300 
                       focus:border-purple-500 focus:ring focus:ring-purple-200 
                       focus:outline-none"
          />
        </div>

        <div>
          <label 
            htmlFor="password" 
            className="text-sm font-semibold text-blue-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            className="mt-1 w-full p-3 rounded-lg border border-gray-300 
                       focus:border-purple-500 focus:ring focus:ring-purple-200 
                       focus:outline-none"
          />
        </div>

        <button
          onClick={() => setScreen('profile')}
          className="w-full bg-purple-600 text-white font-semibold py-3 px-6 
                     rounded-lg shadow-md hover:bg-purple-700 transition-colors 
                     duration-300 mt-6"
        >
          Login
        </button>
      </div>
    </div>
  )
}
