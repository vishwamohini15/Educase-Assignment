import React from 'react'
import { ChevronLeft } from 'lucide-react';

const CreateAccountPage = ({ setScreen }) => {

    return (
        <div className="max-h-[100vh] flex flex-col p-1 md:p-1 mx-5">
            <div className="flex items-center mb-1">
                <button onClick={() => setScreen('welcome')} className="text-gray-600 hover:text-gray-800 transition-colors">
                    <ChevronLeft size={24} />
                </button>
            </div>
            <h2 className=" md:text-4xl font-bold mb-2">
                Create your PopX account
            </h2>

            <div className="space-y-2">
                <div>
                    <label htmlFor="full-name" className="text-sm font-semibold text-blue-700">Full Name<span className="text-red-500">*</span></label>
                    <input type="text" id="full-name" placeholder="Marry Doe" className="mt-1 w-full p-1 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:outline-none" />
                </div>
                <div>
                    <label htmlFor="phone-number" className="text-sm font-semibold text-blue-700">Phone number<span className="text-red-500">*</span></label>
                    <input type="text" id="phone-number" placeholder="Marry Doe" className="mt-1 w-full p-1 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:outline-none" />
                </div>
                <div>
                    <label htmlFor="create-email" className="text-sm font-semibold text-blue-700">Email address<span className="text-red-500">*</span></label>
                    <input type="email" id="create-email" placeholder="Marry Doe" className="mt-1 w-full p-1 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:outline-none" />
                </div>
                <div>
                    <label htmlFor="create-password" className="text-sm font-semibold text-blue-700">Password<span className="text-red-500">*</span></label>
                    <input type="password" id="create-password" placeholder="Marry Doe" className="mt-1 w-full p-1 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:outline-none" />
                </div>
                <div>
                    <label htmlFor="company-name" className="text-sm font-semibold text-blue-700">Company name</label>
                    <input type="text" id="company-name" placeholder="Marry Doe" className="mt-1 w-full p-1 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:outline-none" />
                </div>
                <div className="mt-4">
                    <label className="text-sm font-semibold text-blue-700">Are you an Agency?<span className="text-red-500">*</span></label>
                    <div className="flex items-center space-x-4 mt-2">
                        <label className="flex items-center">
                            <input type="radio" checked name="agency" value="yes" className="form-radio text-purple-600 focus:ring-purple-500" />
                            <span className="ml-2 text-gray-700">Yes</span>
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="agency" value="no" className="form-radio text-purple-600 focus:ring-purple-500" />
                            <span className="ml-2 text-gray-700">No</span>
                        </label>
                    </div>
                </div>
                <button
                    onClick={() => setScreen('profile')}
                    className="w-full bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300 mt-8"
                >
                    Create Account
                </button>
            </div>
        </div>
    )
}

export default CreateAccountPage
