import React, { useState } from "react";
import { toast } from "react-toastify";
import Button from "../components/Button";
import { Eye, EyeOff, LogIn } from "lucide-react"; // using lucide-react icons
import { Link } from "react-router-dom";

function Signin() {
  const emptyUser = { email: "", password: "" };
  const [data, setData] = useState(emptyUser);
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = () => {
    if (!data.email || !data.password) {
      return toast.error("Please fill all the fields!");
    }
    console.log(data);
    toast.success("Login Successful!");
  };

  return (
    <div className=" to-red-50 pt-20 flex items-center justify-center px-4">
      <div className="max-w-md w-full mt-10 backdrop-blur-md bg-white/70 shadow-2xl rounded-3xl p-8 space-y-6 border border-white/30 transition-transform hover:scale-[1.01]">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-red-400 text-transparent bg-clip-text">
            <LogIn className="w-7 h-7 text-blue-500" />
            <h1 className="font-extrabold text-3xl">Welcome Back!</h1>
          </div>
          <p className="text-gray-500 text-sm mt-1">Please sign in to continue</p>
        </div>

        {/* Email Field */}
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-gray-700 mb-1 bg-gradient-to-r from-blue-600 to-red-900 inline-block text-transparent bg-clip-text"
          >
            Email Address
          </label>
          <input
            onChange={(e) => setData({ ...data, email: e.target.value })}
            type="email"
            id="email"
            placeholder="johndoe12@gmail.com"
            className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 placeholder-gray-400"
          />
        </div>

        {/* Password Field */}
        <div className="flex flex-col relative">
          <label
            htmlFor="password"
            className="text-sm font-semibold text-gray-700 mb-1 bg-gradient-to-r from-blue-600 to-red-900 inline-block text-transparent bg-clip-text"
          >
            Password
          </label>
          <input
            type={showPass ? "text" : "password"}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            id="password"
            placeholder="••••••••"
            className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 placeholder-gray-400"
          />
          <div
            className="absolute right-3 top-10 text-gray-500 cursor-pointer hover:text-blue-600 transition"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
          </div>
        </div>

        {/* Submit */}
        <div className="w-full flex items-center justify-center pt-2">
          <Button
            text={"Sign In"}
            onClick={handleSubmit}
            className="bg-gradient-to-r from-blue-600 to-red-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          />
        </div>

        {/* Bottom link */}
        <div className="text-center text-sm text-gray-600 pt-3">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-semibold hover:underline hover:text-blue-800 transition"
          >
            Create one
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
