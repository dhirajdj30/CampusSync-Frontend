import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="w-1/2 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-8">
        <div className="bg-white px-10 py-2.5 rounded-lg shadow-lg  max-w-md">
          {/* College Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="https://vierp-test.s3.ap-south-1.amazonaws.com/logo/vit_logo_new.png"
              alt="College Logo"
              className="h-15"
            />
          </div>

          {/* Welcome Message */}
          <h1 className="text-xl font-bold text-center text-blue-800 mb-1">Welcome Back</h1>
          <p className="text-center text-gray-600 mb-8">Please log in to access your account.</p>

          {/* Login Form */}
          <form>
            {/* PRN/Email Input */}
            <div className="mb-4">
              <label htmlFor="prn" className="block text-sm font-medium text-gray-700">PRN or Email</label>
              <input
                type="text"
                id="prn"
                name="prn"
                placeholder="Enter your PRN or email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Login Button */}
            <button onClick={() => navigate("/")}
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Log In
            </button>
          </form>

          {/* Forgot Password Link */}
          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-blue-600 hover:text-blue-500">Forgot Password?</a>
          </div>

          

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">Don't have an account? <a href="#" className="text-blue-600 hover:text-blue-500">Sign Up</a></p>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <img
          src="https://vierp-test.s3.ap-south-1.amazonaws.com/logo/edupluscampus_banner.jpg"
          alt="College Banner"
          className="w-fit h-fit object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default LoginPage;