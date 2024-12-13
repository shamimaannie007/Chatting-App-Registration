
import React, { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center  sm:px-8 lg:px-16 bg-gray-100">
      {/* Left Side: Form */}
      <div className="w-full md:w-1/2 lg:w-1/3 p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Welcome Back!</h2>
        <p className="text-sm md:text-base text-gray-600 mb-6">
          Don’t have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <form onSubmit={handleRegister}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Username
            </label>
            <input
              id="email"
              type="email"
              placeholder="deniel123@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="*****"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm text-gray-700">
              <input type="checkbox" className="mr-2 rounded" />
              Remember me
            </label>
            <a href="/forgot-password" className="text-sm text-blue-500 hover:underline">
              Forget password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 text-sm">or continue with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="flex justify-center gap-[40px]">
          <button className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded-full shadow">
            <img src="/Frame 14.png" alt="Google" />
          </button>
          <button className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded-full shadow">
            <img src="/Frame 15.png" alt="Facebook" />
          </button>
          <button className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded-full shadow">
            <img src="/Frame 16.png" alt="Apple" />
          </button>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="hidden md:block md:w-1/2 lg:w-2/3 p-6">
        <img
          src="/Image.png"
          alt="Welcome Illustration"
          className="w-[650px] h-[520px]"
        />
      </div>
    </div>
  );
};

export default Register;


