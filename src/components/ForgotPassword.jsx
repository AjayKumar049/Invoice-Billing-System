import React from 'react'

const ForgotPassword = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
                {/* Form Title */}
                <h2 className="text-2xl font-bold text-center text-gray-700">ForgorPassword</h2>
                <form className="space-y-4">

                    {/* Email */}
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Verify Email
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword